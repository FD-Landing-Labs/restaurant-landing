# 🍣 Qitchen Restaurant Website Layout Reference

> Reference website: [https://qitchen-template.framer.website/](https://qitchen-template.framer.website/)

---

## Overall Design Philosophy

- **Dark, elegant theme** with a premium/luxury aesthetic
- **Minimalist design** with generous white space
- **High-quality food photography** as focal points
- **Spaced-out typography** (letter-spacing in headings like "S U S H I", "M E N U", "A B O U T")

---

## Page Structure

### 1. Header/Navigation

- Fixed/sticky header at the top
- Logo on the left
- **"BOOK A TABLE"** CTA button prominently displayed
- Clean, minimal navigation

---

### 2. Homepage

| Section              | Description                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Hero Section**     | Large dramatic heading "SUSHI SENSATION" with spaced letters, full-screen background image, CTA buttons for Menu and Reservation |
| **Navigation Links** | Animated/hover links: Menu, Reservation, Our Restaurant - each with a duplicate label effect                                     |
| **Footer**           | Credits, licensing link, template info                                                                                           |

---

### 3. Menu Page (`/menu`)

| Element           | Details                                                        |
| ----------------- | -------------------------------------------------------------- |
| **Page Title**    | "M E N U" (spaced letters)                                     |
| **Category Tabs** | MAKI, URAMAKI, SPECIAL ROLLS - tab-based navigation            |
| **Menu Items**    | Grid/card layout with image, dish name, price, and description |

#### Menu Item Card Structure

- Food image (high-quality WebP format)
- Dish name (e.g., "SPICY TUNA MAKI")
- Price (e.g., "$5", "$12", "$16")
- Description paragraph

#### Pricing Tiers

| Category      | Price |
| ------------- | ----- |
| Maki          | $5    |
| Uramaki       | $12   |
| Special Rolls | $16   |

#### Sample Menu Items

**MAKI ($5)**

- Spicy Tuna Maki - A tantalizing blend of spicy tuna, cucumber, and avocado
- Mango Maki - Tempura-fried shrimp, cucumber, and cream cheese
- Salmon Maki - Shiitake mushrooms, avocado, and pickled daikon radish
- Tuna Maki - Julienned carrots, bell peppers, and cucumber

**URAMAKI ($12)**

- Volcano Delight - Creamy crab salad, avocado, cucumber with spicy tuna
- Rainbow Fusion - Fresh tuna, salmon, yellowtail, and avocado
- Dragon Elegance - Grilled eel and avocado with dragon scale presentation
- Sunset Serenity - Tempura shrimp, cucumber, and spicy mayo
- Mystic Garden - Shiitake mushrooms, asparagus, and cucumber
- Ocean Breeze - Fresh shrimp, crab stick, and avocado
- Tokyo Blossom - Pink soy paper with tuna, crab stick, and edible flowers

**SPECIAL ROLLS ($16)**

- Sunrise Bliss - Fresh salmon, cream cheese, and asparagus in tobiko
- Mango Tango - Tempura shrimp, cucumber, avocado with mango
- Truffle Indulgence - Black truffle with wagyu beef and microgreens
- Pacific Firecracker - Spicy crab salad, tempura shrimp, and jalapeño
- Eternal Eel - Eel tempura, foie gras with truffle oil and gold leaf

---

### 4. About Page (`/about`)

| Section           | Description                                                                                                                            |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Hero**          | "A B O U T" title with large background image                                                                                          |
| **Tagline**       | "SUSHI ARTISTRY REDEFINED"                                                                                                             |
| **Description**   | "Where culinary craftsmanship meets modern elegance. Indulge in the finest sushi, expertly curated to elevate your dining experience." |
| **Awards/Badges** | Trip Advisor, Michelin Guide, Start Dining badges                                                                                      |
| **Our Story**     | Origin story section about the restaurant                                                                                              |

#### Awards & Recognition Badges

| Source         | Award        |
| -------------- | ------------ |
| Trip Advisor   | Best Sushi   |
| Michelin Guide | Quality Food |
| Start Dining   | Cool Vibe    |

---

### 5. Reservation Page (`/reservation`)

| Element        | Details                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------ |
| **Page Title** | "BOOK A TABLE" (spaced letters)                                                                  |
| **Intro Text** | "Secure your spot at Qitchen, where exceptional sushi and a remarkable dining experience await." |

#### Reservation Form Fields

- Name (text input)
- Email (email input)
- Phone Number (tel input)
- People (number/select)
- Date (date picker - mm/dd/yyyy)
- Time (time picker)
- Submit Button: "FILL OUT THE FORM"

---

## Design Components to Implement

```
📁 Components Needed:
├── Header (with logo + CTA button)
├── HeroSection (full-width, dramatic typography)
├── NavigationLinks (animated hover effects)
├── MenuCard (image, title, price, description)
├── CategoryTabs (for filtering menu items)
├── AwardBadge (icon + text)
├── ReservationForm (styled form inputs)
├── Footer (minimal, credits)
└── PageTitle (spaced-letter styling)
```

---

## Key Styling Characteristics

| Aspect         | Implementation                                                       |
| -------------- | -------------------------------------------------------------------- |
| **Colors**     | Dark background (#0a0a0a or similar), gold/cream accents, white text |
| **Typography** | Sans-serif, uppercase headings, letter-spacing: 0.3-0.5em for titles |
| **Images**     | Full-bleed hero images, consistent aspect ratio for menu items       |
| **Animations** | Hover effects on links (text reveals/duplicates), smooth transitions |
| **Layout**     | CSS Grid for menu cards, flexbox for navigation                      |

---

## Suggested File Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── layout.tsx            # Root layout
│   ├── globals.css           # Global styles
│   ├── menu/
│   │   └── page.tsx          # Menu page
│   ├── about/
│   │   └── page.tsx          # About page
│   └── reservation/
│       └── page.tsx          # Reservation page
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── MenuCard.tsx
│   ├── CategoryTabs.tsx
│   ├── AwardBadge.tsx
│   ├── ReservationForm.tsx
│   ├── PageTitle.tsx
│   └── Footer.tsx
├── data/
│   ├── menuData.ts           # Menu items with categories, prices, descriptions
│   └── types.ts              # TypeScript interfaces
└── lib/
    └── utils.ts              # Utility functions
```

---

## Color Palette (Suggested)

```css
:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
  --accent: #d4af37; /* Gold accent */
  --muted: #a3a3a3;
  --card-bg: #1a1a1a;
  --border: #2a2a2a;
}
```

---

## Typography Guidelines

```css
/* Page Titles - Spaced Letters */
.page-title {
  text-transform: uppercase;
  letter-spacing: 0.5em;
  font-weight: 300;
}

/* Section Headings */
.section-heading {
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 500;
}

/* Body Text */
.body-text {
  letter-spacing: 0.02em;
  line-height: 1.7;
}
```

---

## Animation Ideas

1. **Hover Link Effect** - Text duplicates/reveals on hover
2. **Page Transitions** - Smooth fade-in for page content
3. **Menu Card Hover** - Subtle scale or overlay effect
4. **Form Focus States** - Border glow or underline animation
5. **Scroll Animations** - Fade-in elements as they enter viewport

---

## Responsive Breakpoints

| Breakpoint | Target                 |
| ---------- | ---------------------- |
| `sm`       | 640px (Mobile)         |
| `md`       | 768px (Tablet)         |
| `lg`       | 1024px (Desktop)       |
| `xl`       | 1280px (Large Desktop) |

---

## Next Steps

1. [ ] Set up dark theme in Tailwind config
2. [ ] Create Header component with navigation
3. [ ] Build Hero section with spaced typography
4. [ ] Implement Menu page with category tabs
5. [ ] Create MenuCard component
6. [ ] Build About page with awards section
7. [ ] Create Reservation form
8. [ ] Add animations and hover effects
9. [ ] Ensure responsive design across all breakpoints
