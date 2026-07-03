"use client";

import { createContext, useCallback, useContext, useState } from "react";
import AppointmentModal from "./AppointmentModal";

const AppointmentContext = createContext<{ openAppointment: () => void }>({
  openAppointment: () => {},
});

export function useAppointment() {
  return useContext(AppointmentContext);
}

export function AppointmentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openAppointment = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <AppointmentContext.Provider value={{ openAppointment }}>
      {children}
      <AppointmentModal isOpen={isOpen} onClose={close} />
    </AppointmentContext.Provider>
  );
}
