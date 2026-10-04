# CoreShift Landing Page

A modern, animation-heavy HR platform landing page built with Next.js, React, Tailwind CSS, Framer Motion, and Lenis.

The project is structured around reusable sections and UI components so individual components can be copied and reused in other projects.

---

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lenis
- JavaScript / JSX
- Next/Image

## Usage

npm install
npm run dev
http://localhost:3000

## Design Scale

Typography Scale
The base body text is:
16px

The project follows an approximately 1.25 type scale for larger typography.

## Project Structure

# CoreShift — HR Platform Landing Page

A modern, animation-focused landing page for **CoreShift**, an all-in-one HR platform.

Built with **Next.js, React, Tailwind CSS, Framer Motion, and Lenis**.

The project is organized into reusable sections and UI components, making individual components easy to reuse in other projects.

---

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Framer Motion
- Lenis
- JavaScript / JSX

---

## Project Structure

```text
src/
├── app/
│   ├── layout.jsx
│   └── page.jsx
│
├── components/
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── BuiltForEveryone.jsx
│   │   ├── Integration.jsx
│   │   ├── CoreSolutions.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   │
│   └── ui/
│       ├── BentoGrid
│       ├── InsightsVisual.jsx
│       ├── EmployeeDataVisual.jsx
│       ├── TeamsVisual.jsx
│       ├── LegalTeamsVisual.jsx
│       ├── IntegrationHeader.jsx
│       ├── IntegrationOrbit.jsx
│       ├── TestimonialCard.jsx
│       ├── TestimonialVisual.jsx
│       ├── Envelope.jsx
│       ├── Testi-Button.jsx
│       └── CtaButton.jsx
│
└── ...

public/
├── bento/
├── integration-icons/
└── testimonials/
```

component ctabutton
<CtaButton
variant="hero"
size="md"
href="#"

>

    Request a Demo

</CtaButton>

Integration card and its data are inside - IntegrationOrbit component
Testimonial data is inside TestimonialsVisual

assets

```text
public/
├── bento/
│ ├── r2-c1-1.png
│ └── r2-c1-2.png
│
├── integration-icons/
│ ├── googlemeet.png
│ ├── loom.png
│ ├── outlook.png
│ ├── teams.png
│ ├── gmail.png
│ └── sheets.png
│
└── testimonials/
├── sarah.png
├── john.png
└── emily.png
```
