# Medisure Hospital Website

This project is the website for **Medisure Hospital**.

In simple terms, it is a one-page hospital website with:

- a top contact bar
- a fixed navigation bar
- a hero section with the orbit animation
- care entry sections
- specialties
- visit flow
- about section
- final contact section
- appointment popup form

The site is built with **Next.js**, but you do not need to understand Next.js to make normal content changes. Most edits are straightforward once you know which file controls which part.

## What This Project Does

This site is meant to present Medisure Hospital clearly and professionally.

Visitors can:

- read about the hospital
- browse specialties
- understand how a visit works
- see phone, email, location, and timings
- open the consultation request popup

Important:

- The appointment form is currently **frontend only**
- It validates fields in the browser
- It does **not** send data anywhere yet

## Before You Start

You only need:

- `Node.js` installed
- `npm` available in terminal

To check:

```bash
node -v
npm -v
```

## How To Run The Website

1. Install dependencies:

```bash
npm install
```

2. Start local development:

```bash
npm run dev
```

3. Open this in your browser:

```text
http://localhost:3000
```

## How To Build The Final Static Website

Run:

```bash
npm run build
```

This creates the final export inside:

```text
out/
```

That `out/` folder is the final static website output that can be hosted on a static server.

## Main Files You Should Know

### 1. All text and contact details

If you want to change:

- headings
- paragraph text
- phone number
- email
- timings
- footer text
- button labels
- specialties content

edit this file:

```text
src/data/medisure-content.ts
```

This is the **main content control file** for the website.

### 2. Logo

The current logo file is:

```text
public/brand/medisure-logo.svg
```

If you want to replace the logo:

1. keep the same filename, or
2. change the path inside:

```text
src/data/medisure-content.ts
```

The shared logo renderer is:

```text
src/components/medisure/BrandLogo.tsx
```

### 3. Whole page assembly

This file controls the order of the sections on the page:

```text
src/app/page.tsx
```

If you want to:

- remove a section
- change section order
- add a new section

this is where you do it.

### 4. Global styling

This file controls:

- colors
- typography variables
- shared animations
- orbital motion styles
- popup scrollbar styling
- global spacing behavior

File:

```text
src/app/globals.css
```

### 5. Header and top contact bar

If you want to change the top banner or navbar layout, use:

```text
src/components/medisure/Header.tsx
```

This controls:

- top contact strip
- phone, email, hours, location pill
- main navbar
- mobile menu
- consultation button in header

### 6. Hero section and orbital animation

Hero text:

```text
src/components/medisure/Hero.tsx
```

Orbital animation and center circle behavior:

```text
src/components/medisure/CareCircle.tsx
```

Use these files if you want to change:

- orbit labels
- orbit spacing
- center text behavior
- hero buttons
- hero layout

### 7. Appointment popup

The consultation modal is here:

```text
src/components/medisure/AppointmentModal.tsx
```

Use this file to change:

- popup design
- form fields
- validation messages
- success message
- popup layout

## Quick “What To Change For What” Guide

### Change phone number

Edit:

```text
src/data/medisure-content.ts
```

Look for:

```ts
contact.phone
contact.phoneHref
```

### Change email

Edit:

```text
src/data/medisure-content.ts
```

Look for:

```ts
contact.email
contact.emailHref
```

### Change hospital timings

Edit:

```ts
contact.hours
```

inside:

```text
src/data/medisure-content.ts
```

### Change hero headline or paragraph

Edit:

```ts
hero.headlineStart
hero.headlineAccent
hero.copy
```

inside:

```text
src/data/medisure-content.ts
```

### Change navbar menu labels

Edit:

```ts
nav
```

inside:

```text
src/data/medisure-content.ts
```

### Change specialties content

Edit:

```ts
specialties
```

inside:

```text
src/data/medisure-content.ts
```

### Change the logo

Replace:

```text
public/brand/medisure-logo.svg
```

If the filename changes, also update:

```ts
logo.src
```

inside:

```text
src/data/medisure-content.ts
```

### Change colors or visual feel

Edit:

```text
src/app/globals.css
```

The color variables are near the top of the file.

## Project Structure

```text
src/
  app/
    globals.css                Global design rules
    layout.tsx                 Metadata and app shell
    page.tsx                   Main page section order

  components/medisure/
    About.tsx                  About section
    AppointmentContext.tsx     Popup open/close state
    AppointmentModal.tsx       Consultation popup
    BrandLogo.tsx              Shared logo renderer
    CareCircle.tsx             Orbit animation section
    CarePaths.tsx              "Three clear ways in" section
    FinalCta.tsx               Final contact section
    Footer.tsx                 Footer
    Header.tsx                 Top contact bar + navbar
    Hero.tsx                   First screen section
    Journey.tsx                Visit flow section
    Reveal.tsx                 Scroll reveal helper
    Specialties.tsx            Specialties section

  data/
    medisure-content.ts        Main editable text and contact content

public/
  brand/
    medisure-logo.svg          Hospital logo

scripts/
  audit.mjs                    Optional local visual audit helper
```

## Deployment Notes

This project is configured as a **static export**.

That means:

- `npm run build` generates static files
- output goes to `out/`
- no Node server is required for the final hosted site if you are only serving the static export

The export settings are controlled in:

```text
next.config.ts
```

## If Something Looks Wrong

Use these checks:

1. Run development server again:

```bash
npm run dev
```

2. Run lint:

```bash
npm run lint
```

3. Run production build:

```bash
npm run build
```

If `build` succeeds, the project is structurally valid.

## Summary

If you only remember three things, remember these:

1. Most website text is controlled from `src/data/medisure-content.ts`
2. Layout pieces live inside `src/components/medisure/`
3. Final static output is created with `npm run build` inside `out/`
