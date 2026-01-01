# Building Beautiful PowerPoint Presentations with Manus AI
## A Comprehensive Handout for Maximising Output Through Strategic Planning

---

## Table of Contents
1. [Introduction](#introduction)
2. [Pre-Build Planning Strategy](#pre-build-planning-strategy)
3. [Design Philosophy & Aesthetics](#design-philosophy--aesthetics)
4. [Technical Implementation](#technical-implementation)
5. [Typography & Typography Systems](#typography--typography-systems)
6. [Colour Theory & Palettes](#colour-theory--palettes)
7. [Visual Hierarchy & Layout Patterns](#visual-hierarchy--layout-patterns)
8. [Advanced HTML/CSS Techniques](#advanced-htmlcss-techniques)
9. [Content Architecture](#content-architecture)
10. [Optimisation & Performance](#optimisation--performance)
11. [Common Pitfalls & Solutions](#common-pitfalls--solutions)
12. [Workflow Best Practices](#workflow-best-practices)

---

## Introduction

Manus AI enables rapid creation of professional, visually stunning presentations through the `slide_initialize` and `slide_edit` tools. However, the quality of your output is directly proportional to the quality of your planning and understanding of design principles.

**Key Principle:** Invest 30% of your time in planning and 70% in execution. This handout teaches you how to think strategically about presentation design before you build.

---

## Pre-Build Planning Strategy

### 1. Define Your Design Philosophy First

Before creating a single slide, establish a unified design philosophy that will guide every decision.

**The Design Philosophy Framework:**

```
Design Philosophy = Movement + Core Principles + Visual Language + Interaction Model
```

**Example: Swiss International Style**
- **Movement:** Precision, order, clarity
- **Core Principles:** Grid-based, sans-serif, minimal ornamentation, high contrast
- **Visual Language:** Geometric shapes, clean lines, cyan accents, dark backgrounds
- **Interaction Model:** Subtle transitions, no animations, static elegance

**Why This Matters:**
- Ensures visual consistency across all 12 slides
- Prevents "design drift" where later slides diverge from earlier ones
- Makes decision-making faster (you already know the answer)
- Creates a cohesive brand identity

### 2. Create a Content Outline with Slide Counts

Before building, map your entire presentation structure:

```
Slide 1: Title/Hero
Slide 2: Problem Statement
Slide 3: Problem Details (Grid Layout)
Slide 4: Solution Framework (Funnel)
Slide 5: Solution Details (Numbered List)
Slide 6: Classification System (2-Column Grid)
Slide 7-9: Three Implementation Pathways (3-Column Grids)
Slide 10: Quality Assurance (3-Column with Bullets)
Slide 11: Benefits/ROI (3-Column)
Slide 12: Call to Action (Timeline)
```

**Key Questions to Answer:**
- How many slides do you need? (Default: 12 maximum)
- What is the logical flow?
- Which slides need visual variety?
- Where should you use different layout patterns?

### 3. Plan Visual Variety Across Slides

Avoid monotony by varying layout patterns:

| Slide | Layout Type | Rationale |
|-------|-------------|-----------|
| 1 | Split-screen asymmetric | Hero impact, visual interest |
| 2 | 2-column (text + visual) | Introduce concept with visual support |
| 3 | 2x2 grid | Show four related concepts |
| 4 | Vertical funnel | Process flow, narrowing |
| 5 | Vertical list with numbers | Sequential discovery |
| 6 | 2-column grid | Six related items |
| 7-9 | 3-column grids | Three parallel concepts |
| 10 | 3-column with bullets | Detailed breakdown |
| 11 | 3-column | Three benefits |
| 12 | Timeline + CTA | Conclusion and action |

**Rule:** No two consecutive slides should use identical layout patterns.

### 4. Establish Your Content Constraints

Define what you will and will not include:

**Include:**
- Clear, concise text (no paragraphs)
- Visual hierarchy through typography
- Consistent spacing and alignment
- Section numbers or visual indicators
- Accent colours for emphasis

**Exclude:**
- Stock photos or generic imagery
- Animations or transitions
- Rounded corners or card-style UI
- Metrics or statistics (unless essential)
- Decorative elements that don't serve content

---

## Design Philosophy & Aesthetics

### Choosing Your Design Movement

Select one design movement and commit fully to it. Here are proven approaches for business presentations:

#### **1. Swiss International Style** (Recommended for Enterprise)
- **Characteristics:** Grid-based, sans-serif, minimal, high contrast
- **Colour Palette:** Black/white + one accent colour (cyan, blue, or red)
- **Typography:** Single sans-serif font (Inter, Helvetica, Roboto)
- **Best For:** Technical, corporate, CTO presentations
- **Emotional Tone:** Authoritative, trustworthy, precise

**Implementation:**
```css
/* Swiss International Base */
body {
  font-family: 'Inter', sans-serif;
  background: #121212;  /* Deep charcoal */
  color: #FFFFFF;       /* High contrast */
}

.accent {
  color: #22D3EE;       /* Bright cyan */
}
```

#### **2. Brutalist Minimalism**
- **Characteristics:** Stark, unpolished, raw typography, extreme contrast
- **Colour Palette:** Black + white + one bold colour
- **Typography:** Mix of serif and sans-serif for tension
- **Best For:** Creative, design-focused, startup pitches
- **Emotional Tone:** Bold, unconventional, memorable

#### **3. Bauhaus Modernism**
- **Characteristics:** Geometric shapes, bold colours, functional beauty
- **Colour Palette:** Primary colours (red, yellow, blue) + black/white
- **Typography:** Bold geometric sans-serif
- **Best For:** Product launches, creative industries
- **Emotional Tone:** Innovative, dynamic, forward-thinking

#### **4. Neoclassical Elegance**
- **Characteristics:** Symmetry, serif typography, refined spacing
- **Colour Palette:** Neutral tones (cream, grey, navy) + gold accents
- **Typography:** Serif + sans-serif pairing
- **Best For:** Luxury, finance, heritage brands
- **Emotional Tone:** Sophisticated, timeless, premium

**Decision Framework:**
- **Corporate/Technical?** → Swiss International
- **Creative/Startup?** → Brutalist Minimalism
- **Product-focused?** → Bauhaus Modernism
- **Premium/Luxury?** → Neoclassical Elegance

---

## Technical Implementation

### 1. HTML Structure Best Practices

Always use semantic HTML and maintain consistent structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slide Title</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* All styles here */
    </style>
</head>
<body>
    <div class="slide-container">
        <!-- Content here -->
    </div>
</body>
</html>
```

**Critical Rules:**
1. **Never write CSS outside the `<style>` tag**
2. **Always use `slide-container` as the outer wrapper**
3. **Never apply padding to `slide-container`** (use inner containers instead)
4. **Use `min-height: 720px`** to ensure slides don't overflow
5. **Always include `position: relative; overflow: hidden;`** on slide-container for background elements

### 2. CSS Architecture Pattern

Organize your CSS in this order:

```css
/* 1. Reset & Base */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; background: #121212; }

/* 2. Slide Container */
.slide-container {
    width: 1280px;
    min-height: 720px;
    background: #121212;
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    padding-left: 80px;
    padding-right: 80px;
    position: relative;
    overflow: hidden;
}

/* 3. Background Elements (::before, ::after) */
.slide-container::after {
    content: '01';
    position: absolute;
    bottom: -40px;
    right: -60px;
    font-size: 280px;
    color: #22D3EE;
    opacity: 0.06;
    z-index: 0;
}

/* 4. Content Wrapper */
.header { margin-bottom: 48px; z-index: 1; }

/* 5. Typography */
.title { font-size: 48px; font-weight: 700; line-height: 1.2; }

/* 6. Layout Components */
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; }

/* 7. Interactive Elements */
.item { border-left: 3px solid #22D3EE; padding-left: 24px; }
```

**Why This Order?**
- Prevents specificity conflicts
- Makes maintenance easier
- Ensures z-index layering works correctly
- Follows cascade principles

### 3. Responsive Design Considerations

Although presentations are fixed-width (1280px), use flexible units:

```css
/* Good: Relative units */
.title { font-size: 48px; line-height: 1.2; }
.body-text { font-size: 16px; line-height: 1.6; }
.gap { gap: 32px; }

/* Avoid: Absolute pixel-based everything */
.title { font-size: 48px; line-height: 24px; } /* Inflexible */
```

---

## Typography & Typography Systems

### 1. Font Selection Strategy

**Rule 1: Use ONE primary font family**

For business presentations, choose one of these enterprise-grade sans-serifs:

| Font | Characteristics | Best For |
|------|-----------------|----------|
| Inter | Neutral, readable, modern | General business, tech |
| Roboto | Geometric, friendly, versatile | Startups, creative |
| Helvetica Neue | Classic, timeless, professional | Corporate, finance |
| DM Sans | Contemporary, distinctive | Design-forward brands |
| Space Grotesk | Geometric, bold, tech-forward | Tech companies, innovation |

**Rule 2: Pair ONE serif font only if necessary**

If you need contrast, use:
- Playfair Display (serif) + Inter (sans-serif)
- Lora (serif) + Roboto (sans-serif)

**Never mix more than 2 font families.**

### 2. Font Weight Hierarchy

Establish a clear weight system:

```css
/* Light: Subtitles, secondary text */
.subtitle { font-weight: 300; font-size: 14px; }

/* Regular: Body text, descriptions */
.body-text { font-weight: 400; font-size: 16px; }

/* Medium: Emphasis, labels */
.label { font-weight: 500; font-size: 13px; text-transform: uppercase; }

/* Semi-bold: Section titles */
.section-title { font-weight: 600; font-size: 20px; }

/* Bold: Main titles */
.title { font-weight: 700; font-size: 48px; }
```

**Rule:** Use 300, 400, 600, 700. Avoid 500 unless absolutely necessary.

### 3. Font Size Scale

Create a consistent typographic scale:

```
Slide Title:        48px (font-weight: 700)
Section Title:      20px (font-weight: 600)
Item Title:         18px (font-weight: 600)
Body Text:          16px (font-weight: 300)
Small Text:         15px (font-weight: 300)
Labels:             13px (font-weight: 600, uppercase)
Tiny Labels:        12px (font-weight: 600, uppercase)
```

**Why This Scale?**
- Creates visual hierarchy without confusion
- Maintains readability across all sizes
- Follows the 1.2x ratio (each level is 20% larger)

### 4. Line Height & Spacing

Proper line height makes text readable:

```css
/* Titles: Tight line height */
.title { line-height: 1.2; }

/* Body text: Generous line height */
.body-text { line-height: 1.6; }

/* Descriptions: Balanced line height */
.description { line-height: 1.5; }
```

**Rule:** 
- Titles: 1.1–1.2
- Body: 1.5–1.7
- Labels: 1.0–1.1

### 5. Letter Spacing for Emphasis

Use letter spacing strategically:

```css
/* Normal text: No letter spacing */
.body-text { letter-spacing: 0; }

/* Labels & section markers: Increased spacing */
.label { 
    letter-spacing: 2px;
    text-transform: uppercase;
}

/* Titles: Slight negative spacing */
.title { letter-spacing: -0.5px; }
```

---

## Colour Theory & Palettes

### 1. Colour Psychology for Business

Choose colours that evoke the right emotional response:

| Colour | Psychology | Business Use |
|--------|-----------|--------------|
| Cyan/Blue | Trust, stability, intelligence | Tech, finance, corporate |
| Green | Growth, harmony, renewal | Sustainability, health, growth |
| Red | Energy, urgency, passion | Calls-to-action, alerts |
| Purple | Creativity, luxury, wisdom | Premium brands, innovation |
| Orange | Enthusiasm, warmth, creativity | Startups, creative industries |
| Grey | Neutrality, professionalism, balance | Corporate, minimalist |

### 2. Building a Colour Palette

**The 60-30-10 Rule:**
- **60%:** Primary colour (background)
- **30%:** Secondary colour (text, structure)
- **10%:** Accent colour (emphasis, CTAs)

**Example: Swiss International Dark Mode**
```css
:root {
    --primary: #121212;      /* Deep charcoal (60%) */
    --secondary: #FFFFFF;    /* White (30%) */
    --accent: #22D3EE;       /* Bright cyan (10%) */
    --muted: #E0E0E0;        /* Light grey (supporting) */
}
```

### 3. OKLCH Colour Format (Advanced)

For modern presentations, use OKLCH instead of HSL:

```css
/* Old way (HSL) */
background: hsl(200, 100%, 50%);

/* New way (OKLCH) - More perceptually uniform */
background: oklch(0.6 0.2 200);
```

**Why OKLCH?**
- Perceptually uniform (colours appear equally bright)
- Better for accessibility
- More intuitive adjustments
- Future-proof

### 4. Contrast & Accessibility

Always maintain WCAG AA contrast ratios:

```css
/* Good: 7:1 contrast ratio */
.title { color: #FFFFFF; background: #121212; }

/* Avoid: Insufficient contrast */
.text { color: #CCCCCC; background: #FFFFFF; } /* Only 3:1 */
```

**Quick Check:**
- White on dark background: ✓ Always safe
- Dark on light background: ✓ Always safe
- Light on light: ✗ Never use
- Dark on dark: ✗ Never use

---

## Visual Hierarchy & Layout Patterns

### 1. Creating Visual Hierarchy Without Colour

Use these techniques to guide the viewer's eye:

#### **A. Size Hierarchy**
```css
.primary { font-size: 48px; }      /* Largest, most important */
.secondary { font-size: 20px; }    /* Medium importance */
.tertiary { font-size: 16px; }     /* Supporting information */
```

#### **B. Weight Hierarchy**
```css
.emphasis { font-weight: 700; }    /* Bold = important */
.normal { font-weight: 400; }      /* Regular = normal */
.subtle { font-weight: 300; }      /* Light = secondary */
```

#### **C. Opacity Hierarchy**
```css
.primary { opacity: 1.0; }         /* Full opacity = important */
.secondary { opacity: 0.7; }       /* 70% = supporting */
.background { opacity: 0.06; }     /* 6% = very subtle background */
```

#### **D. Spacing Hierarchy**
```css
.primary-section { margin-bottom: 48px; }
.secondary-section { margin-bottom: 32px; }
.tertiary-section { margin-bottom: 16px; }
```

### 2. Layout Patterns for Different Content

#### **Pattern 1: Hero + Supporting (Asymmetric Split)**
```css
.slide-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}
```
**Best For:** Title slides, problem/solution pairs

#### **Pattern 2: Title + Grid (2x2)**
```css
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}
```
**Best For:** Four related concepts, challenges, benefits

#### **Pattern 3: Title + Grid (3-Column)**
```css
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
}
```
**Best For:** Three parallel concepts, assembly lines, pillars

#### **Pattern 4: Title + Vertical List**
```css
.list {
    display: flex;
    flex-direction: column;
    gap: 28px;
}
```
**Best For:** Sequential steps, detailed breakdowns, timelines

#### **Pattern 5: Funnel (Decreasing Width)**
```css
.funnel-item {
    max-width: 100%;
}
.funnel-item:nth-child(1) { max-width: 700px; }
.funnel-item:nth-child(2) { max-width: 550px; }
.funnel-item:nth-child(3) { max-width: 400px; }
```
**Best For:** Process flows, filtering, narrowing

### 3. Visual Indicators & Accent Elements

#### **Left Border Accent**
```css
.item {
    border-left: 3px solid #22D3EE;
    padding-left: 24px;
}
```
**Effect:** Draws eye to left, creates visual structure

#### **Numbered Circles**
```css
.marker {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #121212;
    font-weight: 700;
}
```
**Effect:** Adds visual interest, shows sequence

#### **Gradient Backgrounds**
```css
.item-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%);
    opacity: 0.2;
}
```
**Effect:** Subtle visual support without distraction

#### **Section Numbers (Background)**
```css
.slide-container::after {
    content: '01';
    position: absolute;
    bottom: -40px;
    right: -60px;
    font-size: 280px;
    color: #22D3EE;
    opacity: 0.06;
    z-index: 0;
}
```
**Effect:** Adds visual interest, shows progression

---

## Advanced HTML/CSS Techniques

### 1. CSS Grid for Complex Layouts

Master CSS Grid for flexible, responsive layouts:

```css
/* 2-column grid with gap */
.grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
}

/* 3-column grid with different gaps */
.grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
    align-items: stretch;
}

/* Asymmetric grid (1fr 2fr) */
.grid-asymmetric {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 60px;
    align-items: center;
}
```

**Key Properties:**
- `grid-template-columns`: Define column widths
- `gap`: Space between items
- `align-items`: Vertical alignment (start, center, stretch)
- `justify-items`: Horizontal alignment

### 2. Flexbox for Lists & Sequences

Use Flexbox for vertical and horizontal lists:

```css
/* Vertical list with spacing */
.vertical-list {
    display: flex;
    flex-direction: column;
    gap: 28px;
}

/* Horizontal list with spacing */
.horizontal-list {
    display: flex;
    flex-direction: row;
    gap: 24px;
    justify-content: space-between;
}

/* Centered flex container */
.flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
}
```

### 3. Gradients for Visual Interest

Create sophisticated gradients:

```css
/* Linear gradient (left to right) */
.gradient-horizontal {
    background: linear-gradient(90deg, #22D3EE 0%, #8B5CF6 100%);
}

/* Linear gradient (top to bottom) */
.gradient-vertical {
    background: linear-gradient(180deg, #22D3EE 0%, transparent 100%);
}

/* Diagonal gradient */
.gradient-diagonal {
    background: linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%);
}

/* Multi-stop gradient */
.gradient-multi {
    background: linear-gradient(90deg, 
        #22D3EE 0%, 
        #8B5CF6 50%, 
        #EC4899 100%
    );
}
```

### 4. Pseudo-Elements for Decoration

Use `::before` and `::after` for visual elements:

```css
/* Accent line before title */
.title::before {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #22D3EE 0%, #8B5CF6 100%);
    margin-bottom: 24px;
}

/* Bullet points without list markup */
.item::before {
    content: '•';
    color: #22D3EE;
    margin-right: 12px;
    font-weight: 600;
}

/* Section numbers in background */
.slide-container::after {
    content: '01';
    position: absolute;
    bottom: -40px;
    right: -60px;
    font-size: 280px;
    opacity: 0.06;
}
```

### 5. Box Shadows for Depth

Create subtle depth without overdoing it:

```css
/* Subtle shadow */
.item {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Glow effect */
.marker {
    box-shadow: 0 0 8px rgba(34, 211, 238, 0.3);
}

/* No shadow (clean look) */
.clean {
    box-shadow: none;
}
```

---

## Content Architecture

### 1. Slide Content Structure

Every slide should follow this hierarchy:

```
Slide Container
├── Background Elements (::before, ::after)
├── Header Section
│   ├── Section Label (12px, uppercase, cyan)
│   └── Title (48px, bold)
├── Intro/Description (optional)
└── Main Content
    ├── Grid/List/Timeline
    └── Visual Elements
```

### 2. Text Density Guidelines

**Rule: Less is more**

| Content Type | Recommended | Avoid |
|--------------|-------------|-------|
| Title | 3–5 words | Long sentences |
| Subtitle | 1–2 words | Paragraphs |
| Body text | 15–25 words | Dense paragraphs |
| Bullet points | 3–5 per section | 10+ items |
| Labels | 1–3 words | Long descriptions |

### 3. Content Patterns by Slide Type

#### **Problem Statement Slide**
```
Title: "The Problem"
Content: 
- 1 headline (problem)
- 4 supporting points (grid layout)
- Visual indicator (icon, bar chart, or gradient)
```

#### **Solution Framework Slide**
```
Title: "The Solution"
Content:
- 1 intro paragraph
- 3 main components (funnel or 3-column)
- Visual hierarchy through sizing
```

#### **Timeline Slide**
```
Title: "The Plan"
Content:
- 4 phases with week ranges
- Title and description per phase
- Left border accents
- CTA at bottom
```

---

## Optimisation & Performance

### 1. Slide Height Optimization

Always keep slides under 720px minimum height:

```css
.slide-container {
    width: 1280px;
    min-height: 720px;  /* Minimum, not fixed */
    /* Content fills space, doesn't overflow */
}
```

**Optimization Techniques:**
- Reduce gaps between items (32px → 24px → 12px)
- Tighten line-height (1.6 → 1.5 → 1.4)
- Reduce padding on header (48px → 32px → 12px)
- Use smaller fonts for supporting text (16px → 15px)

### 2. File Size Optimization

Keep HTML/CSS lean:

```css
/* Good: Efficient CSS */
.item {
    border-left: 3px solid #22D3EE;
    padding-left: 24px;
    margin-bottom: 28px;
}

/* Avoid: Redundant CSS */
.item {
    border-left: 3px solid #22D3EE;
    border-right: none;
    border-top: none;
    border-bottom: none;
    padding-left: 24px;
    padding-right: 0;
    padding-top: 0;
    padding-bottom: 0;
}
```

### 3. Font Loading Optimization

Use system fonts or Google Fonts efficiently:

```html
<!-- Good: Single font family, specific weights -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">

<!-- Avoid: Multiple fonts or all weights -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

---

## Common Pitfalls & Solutions

### Pitfall 1: Inconsistent Spacing

**Problem:** Gaps between elements vary (24px, 32px, 40px, 48px)

**Solution:** Use a consistent spacing scale:
```css
--spacing-xs: 8px;
--spacing-sm: 12px;
--spacing-md: 16px;
--spacing-lg: 24px;
--spacing-xl: 32px;
--spacing-2xl: 48px;
```

### Pitfall 2: Too Many Colours

**Problem:** Using 5+ colours makes slides look chaotic

**Solution:** Stick to 3 colours maximum:
- Primary (background)
- Secondary (text)
- Accent (emphasis)

### Pitfall 3: Mismatched Typography

**Problem:** Font sizes don't follow a consistent scale

**Solution:** Use the 1.2x scale:
```
12px → 14px → 18px → 20px → 24px → 48px
```

### Pitfall 4: Poor Contrast

**Problem:** Light text on light background or vice versa

**Solution:** Always use high contrast:
```css
/* Good */
color: #FFFFFF;
background: #121212;

/* Avoid */
color: #CCCCCC;
background: #FFFFFF;
```

### Pitfall 5: Overflow Content

**Problem:** Content extends beyond 720px height

**Solution:** 
- Reduce gaps (28px → 12px)
- Reduce padding (48px → 12px)
- Use smaller fonts for supporting text
- Test height before finalizing

### Pitfall 6: Inconsistent Alignment

**Problem:** Elements don't align to a grid

**Solution:** Use CSS Grid or Flexbox consistently:
```css
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;  /* Consistent gap */
    align-items: start;  /* Consistent alignment */
}
```

### Pitfall 7: Unclear Visual Hierarchy

**Problem:** Viewer doesn't know where to look first

**Solution:** Use size, weight, and colour strategically:
```css
.title { font-size: 48px; font-weight: 700; color: #FFFFFF; }
.subtitle { font-size: 20px; font-weight: 600; color: #FFFFFF; }
.body { font-size: 16px; font-weight: 300; color: #E0E0E0; }
```

---

## Workflow Best Practices

### 1. The Planning Phase (30% of Time)

**Step 1: Define Design Philosophy**
- Choose one design movement
- Establish colour palette
- Select typography system
- Create spacing scale

**Step 2: Create Content Outline**
- Map all 12 slides
- Plan layout variety
- Identify visual elements needed
- Define content constraints

**Step 3: Create a Template**
- Build one "reference slide" with all styles
- Document all CSS classes
- Create a style guide
- Test height and spacing

### 2. The Building Phase (70% of Time)

**Step 1: Batch Similar Slides**
- Build all 3-column grids together
- Build all vertical lists together
- Build all timelines together

**Step 2: Maintain Consistency**
- Copy-paste CSS from reference slide
- Only change content, not styles
- Use consistent class names
- Test each slide for height

**Step 3: Optimize as You Go**
- Check contrast ratios
- Verify alignment to grid
- Test typography hierarchy
- Ensure spacing consistency

### 3. The Refinement Phase (Final Polish)

**Step 1: Visual Review**
- Check all slides in sequence
- Verify layout variety
- Ensure colour consistency
- Confirm typography hierarchy

**Step 2: Content Review**
- Verify spelling and grammar (British English)
- Check for consistency in terminology
- Ensure no metrics or assumptions
- Verify section numbers are correct

**Step 3: Technical Review**
- Test all slides for height (< 720px)
- Verify z-index layering
- Check for CSS conflicts
- Ensure fonts load correctly

---

## Advanced Tips for Maximum Output

### Tip 1: Use Pseudo-Elements Strategically

Instead of creating separate HTML elements, use `::before` and `::after`:

```css
/* Creates visual accent without extra HTML */
.item::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #22D3EE;
    border-radius: 50%;
    margin-right: 12px;
}
```

**Benefit:** Cleaner HTML, easier to maintain, faster to build

### Tip 2: Leverage Gradients for Visual Interest

Gradients add sophistication without images:

```css
/* Gradient text */
.gradient-text {
    background: linear-gradient(90deg, #22D3EE 0%, #8B5CF6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Gradient border */
.gradient-border {
    border: 2px solid;
    border-image: linear-gradient(90deg, #22D3EE 0%, #8B5CF6 100%) 1;
}
```

### Tip 3: Create Visual Flow with Opacity

Guide the viewer's eye using opacity:

```css
/* Primary content: Full opacity */
.primary { opacity: 1.0; }

/* Supporting content: 70% opacity */
.secondary { opacity: 0.7; }

/* Background elements: 6% opacity */
.background { opacity: 0.06; }
```

### Tip 4: Use CSS Variables for Consistency

Define all colours and sizes as variables:

```css
:root {
    --color-primary: #121212;
    --color-secondary: #FFFFFF;
    --color-accent: #22D3EE;
    --color-muted: #E0E0E0;
    
    --font-size-title: 48px;
    --font-size-subtitle: 20px;
    --font-size-body: 16px;
    
    --spacing-lg: 48px;
    --spacing-md: 32px;
    --spacing-sm: 24px;
}

.title { font-size: var(--font-size-title); }
.item { margin-bottom: var(--spacing-sm); }
```

**Benefit:** Change entire presentation's look by updating variables

### Tip 5: Master the Funnel Layout

The funnel (decreasing width) is powerful for process flows:

```css
.funnel {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
}

.funnel-stage {
    border: 2px solid #22D3EE;
    padding: 20px 24px;
    text-align: center;
}

.stage-1 { max-width: 700px; }
.stage-2 { max-width: 550px; }
.stage-3 { max-width: 400px; }
```

**Effect:** Visually represents narrowing/filtering

### Tip 6: Create Visual Rhythm with Numbered Lists

Use numbered markers for sequential content:

```css
.marker {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #22D3EE 0%, #8B5CF6 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #121212;
    font-weight: 700;
    font-size: 14px;
}
```

**Effect:** Adds visual interest, shows sequence, guides eye

---

## Conclusion: The 30-70 Rule

**Remember:** 30% planning, 70% execution.

The presentations that look effortlessly beautiful are the ones where the designer invested significant time upfront in:

1. **Design Philosophy** – Choosing one movement and committing fully
2. **Content Architecture** – Planning slide structure and layout variety
3. **Typography System** – Establishing font sizes, weights, and spacing
4. **Colour Palette** – Limiting to 3 colours and using them strategically
5. **Visual Hierarchy** – Using size, weight, opacity, and spacing to guide the eye

Once these foundations are solid, the execution becomes fast, consistent, and produces stunning results.

---

## Quick Reference: The Essential Checklist

- [ ] **Design Philosophy:** Chosen and documented
- [ ] **Colour Palette:** 3 colours defined (primary, secondary, accent)
- [ ] **Typography:** 1 font family, 4 weights (300, 400, 600, 700)
- [ ] **Spacing Scale:** Defined (8px, 12px, 16px, 24px, 32px, 48px)
- [ ] **Layout Patterns:** Varied across 12 slides
- [ ] **Content Outline:** All 12 slides mapped with layout types
- [ ] **CSS Architecture:** Organized and consistent
- [ ] **Contrast:** All text meets WCAG AA standards
- [ ] **Height:** All slides < 720px minimum
- [ ] **Typography Hierarchy:** Clear size and weight differentiation
- [ ] **Visual Indicators:** Consistent use of accents, borders, icons
- [ ] **Content Density:** Text is concise and scannable
- [ ] **Alignment:** Elements aligned to grid
- [ ] **Consistency:** Styles applied uniformly across all slides

---

**End of Handout**

*This handout is designed to be referenced throughout your presentation-building journey. Bookmark it, return to it, and use it as a guide for every project.*
