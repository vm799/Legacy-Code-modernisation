# Visual Walkthrough: Building Beautiful PowerPoint Presentations with Manus AI
## Comprehensive Slide Outline

---

## Slide 1: Title Slide
**Title:** Building Beautiful PowerPoint Presentations with Manus AI
**Subtitle:** A Visual Walkthrough of Design Principles, Technical Implementation, and Workflow Mastery
**Content:** Introduction to the complete guide covering planning, design, and execution

---

## Slide 2: The 30-70 Planning vs Execution Rule
**Key Insight:** Invest 30% of time upfront in planning to achieve 70% faster execution and superior results
**Content:**
- Planning Phase (30%): Design philosophy, content outline, visual variety, constraints
- Execution Phase (70%): Building, maintaining consistency, optimisation
- Visual: Reference graphic showing planning framework with icons and output quality arrow
- Key Takeaway: Better planning = exponentially better output

---

## Slide 3: Four Design Movements for Presentations
**Key Insight:** Choose one design movement and commit fully to it for visual cohesion
**Content:**
- Swiss International: Grid-based, minimal, cyan accents (Technical presentations)
- Brutalist Minimalism: Stark, raw, high contrast (Conceptual presentations)
- Bauhaus Modernism: Geometric, bold colours (Creative presentations)
- Neoclassical Elegance: Symmetric, serif, gold accents (Formal presentations)
**Visual:** 2x2 grid showing each movement with example slides and characteristics
**Decision Framework:** Match movement to presentation type and audience

---

## Slide 4: Typography Hierarchy System
**Key Insight:** Clear typography hierarchy guides the viewer's eye without relying on colour
**Content:**
- 48px Bold: Slide titles (primary focus)
- 20px Semi-bold: Section titles (secondary focus)
- 18px Semi-bold: Item titles (tertiary focus)
- 16px Regular: Body text (supporting information)
- 15px Light: Descriptions (detailed information)
- 13px Uppercase: Labels (metadata)
**Visual:** Hierarchy diagram showing font sizes, weights, and line heights
**Technical:** Include letter-spacing and line-height values for each level

---

## Slide 5: The 60-30-10 Colour Rule
**Key Insight:** Limit your palette to three colours and apply them strategically
**Content:**
- 60% Primary Colour: Background (dark charcoal #121212)
- 30% Secondary Colour: Text (white #FFFFFF)
- 10% Accent Colour: Emphasis (bright cyan #22D3EE)
**Visual:** Pie chart showing proportions, sample slide layout, OKLCH values, contrast ratios
**Benefit:** Creates visual harmony, ensures accessibility, maintains professional appearance

---

## Slide 6: Five Proven Layout Patterns
**Key Insight:** Vary layout patterns across slides to maintain visual interest and prevent monotony
**Content:**
1. Asymmetric Split (1fr 2fr): Hero slides, problem/solution pairs
2. 2x2 Grid: Four related concepts, challenges, benefits
3. 3-Column Grid: Three parallel concepts, assembly lines, pillars
4. Vertical List: Sequential steps, detailed breakdowns, timelines
5. Funnel: Process flows, filtering, narrowing
**Visual:** Wireframe examples for each pattern with use cases
**Rule:** No two consecutive slides should use identical layout patterns

---

## Slide 7: CSS Architecture Layers
**Key Insight:** Organise CSS in layers from foundational to interactive for maintainability
**Content:**
- Layer 1: Reset & Base (margin, padding, font)
- Layer 2: Slide Container (1280px, flex, relative positioning)
- Layer 3: Background Elements (pseudo-elements, faded numbers)
- Layer 4: Content Wrapper (header, z-index management)
- Layer 5: Typography (title, body, labels)
- Layer 6: Layout Components (grid, flexbox)
- Layer 7: Interactive Elements (borders, accents, shadows)
**Visual:** Layered architecture diagram showing hierarchy and dependencies
**Benefit:** Prevents specificity conflicts, enables easy maintenance, ensures z-index layering works

---

## Slide 8: Creating Visual Hierarchy Without Colour
**Key Insight:** Use size, weight, opacity, and spacing to guide the viewer's eye
**Content:**
- Size Hierarchy: 48px > 20px > 16px (largest = most important)
- Weight Hierarchy: 700 > 600 > 400 > 300 (bold = important)
- Opacity Hierarchy: 1.0 > 0.7 > 0.06 (full opacity = primary)
- Spacing Hierarchy: 48px > 32px > 16px (larger gaps = separation)
**Visual:** Four-column diagram showing each technique with sample slide applying all techniques
**Application:** Combine all four techniques for maximum impact

---

## Slide 9: Grid & Flexbox Mastery
**Key Insight:** Master CSS Grid and Flexbox to create flexible, responsive layouts
**Content:**
- CSS Grid: 2-column (1fr 1fr), 3-column (1fr 1fr 1fr), asymmetric (1fr 2fr)
- Flexbox: Vertical lists (flex-direction: column), horizontal lists (flex-direction: row)
- Key Properties: grid-template-columns, gap, align-items, justify-content
- Common Patterns: Centred flex, space-between, stretch alignment
**Code Examples:** Practical CSS snippets for common layouts
**Benefit:** Enables responsive, flexible layouts without hardcoding dimensions

---

## Slide 10: Gradients for Visual Interest
**Key Insight:** Sophisticated gradients add depth and visual interest without images
**Content:**
- Linear Gradients: Horizontal (90deg), vertical (180deg), diagonal (135deg)
- Multi-stop Gradients: Three or more colours for complex effects
- Gradient Text: Using background-clip for text effects
- Gradient Borders: Using border-image for accent lines
**Code Examples:** CSS snippets for each gradient type
**Application:** Use gradients on numbered markers, accent lines, and background elements

---

## Slide 11: Pseudo-Elements for Decoration
**Key Insight:** Use ::before and ::after to add visual elements without cluttering HTML
**Content:**
- Accent Lines: ::before for visual separators
- Bullet Points: ::before for custom bullets without list markup
- Section Numbers: ::after for large faded background numbers
- Visual Indicators: Decorative elements that enhance without distracting
**Code Examples:** CSS snippets for common pseudo-element patterns
**Benefit:** Cleaner HTML, easier maintenance, faster to build

---

## Slide 12: Content Architecture & Text Density
**Key Insight:** Less is more—concise content with clear hierarchy is more impactful
**Content:**
- Slide Titles: 3–5 words (avoid long sentences)
- Subtitles: 1–2 words (avoid paragraphs)
- Body Text: 15–25 words (avoid dense paragraphs)
- Bullet Points: 3–5 per section (avoid 10+ items)
- Labels: 1–3 words (avoid long descriptions)
**Table:** Content density guidelines by type
**Principle:** Every word should earn its place on the slide

---

## Slide 13: Common Pitfalls & Solutions
**Key Insight:** Avoid these seven common mistakes to maintain design consistency
**Content:**
1. Inconsistent Spacing: Use a consistent spacing scale (8px, 12px, 16px, 24px, 32px, 48px)
2. Too Many Colours: Stick to 3 colours maximum (primary, secondary, accent)
3. Mismatched Typography: Use a 1.2x font size scale (12px → 14px → 18px → 20px → 24px → 48px)
4. Poor Contrast: Always use high contrast (white on dark, dark on light)
5. Overflow Content: Reduce gaps, padding, and font sizes to keep slides under 720px
6. Inconsistent Alignment: Use CSS Grid or Flexbox consistently
7. Unclear Visual Hierarchy: Use size, weight, opacity, and spacing strategically
**Visual:** Before/after examples for each pitfall
**Takeaway:** Prevention is easier than correction

---

## Slide 14: The Planning Phase (30% Time)
**Key Insight:** Invest time upfront to define your design system before building
**Content:**
- Step 1: Define Design Philosophy (choose movement, establish palette, select typography)
- Step 2: Create Content Outline (map all 12 slides, plan layout variety, identify visuals)
- Step 3: Create a Template (build reference slide, document CSS classes, create style guide)
**Deliverables:** Design philosophy document, content outline, reference slide with all styles
**Benefit:** Faster execution, consistent results, fewer revisions

---

## Slide 15: The Building Phase (70% Time)
**Key Insight:** Batch similar slides and maintain consistency throughout execution
**Content:**
- Step 1: Batch Similar Slides (build all 3-column grids together, all lists together, all timelines)
- Step 2: Maintain Consistency (copy-paste CSS from reference slide, only change content)
- Step 3: Optimise as You Go (check contrast, verify alignment, test typography, ensure spacing)
**Workflow:** Efficient batching reduces context switching and maintains consistency
**Quality:** Test each slide for height, z-index, and visual hierarchy

---

## Slide 16: The Refinement Phase (Final Polish)
**Key Insight:** Three review passes ensure visual, content, and technical excellence
**Content:**
- Visual Review: Check all slides in sequence, verify layout variety, ensure colour consistency
- Content Review: Verify spelling and grammar, check terminology consistency, ensure no metrics
- Technical Review: Test all slides for height, verify z-index layering, check for CSS conflicts
**Checklist:** 14-point quality assurance checklist
**Goal:** Deliver polished, professional presentations ready for presentation

---

## Slide 17: Advanced Tip 1 - Pseudo-Elements Strategy
**Key Insight:** Use pseudo-elements strategically to add visual interest without HTML bloat
**Content:**
- Creates visual accents without extra HTML elements
- Cleaner HTML structure, easier to maintain
- Faster to build, reduces file size
- Examples: Bullet points, accent lines, section numbers, visual indicators
**Code Example:** CSS for creating visual accents with ::before and ::after
**Benefit:** Professional results with minimal markup

---

## Slide 18: Advanced Tip 2 - CSS Variables for Consistency
**Key Insight:** Define all colours and sizes as variables for easy global updates
**Content:**
- Define colour palette as variables (primary, secondary, accent, muted)
- Define typography sizes as variables (title, subtitle, body, label)
- Define spacing as variables (lg, md, sm, xs)
- Change entire presentation's look by updating variables
**Code Example:** CSS variable definitions and usage
**Benefit:** Consistency, maintainability, rapid iteration

---

## Slide 19: Advanced Tip 3 - Funnel Layout for Process Flows
**Key Insight:** The funnel layout (decreasing width) visually represents narrowing/filtering
**Content:**
- Stage 1: Widest (full width)
- Stage 2: Medium (550px)
- Stage 3: Narrowest (400px)
- Creates visual representation of process narrowing
- Guides viewer's eye downward through stages
**Code Example:** CSS for funnel layout with decreasing widths
**Application:** Process flows, filtering, prioritisation, narrowing

---

## Slide 20: Advanced Tip 4 - Numbered Markers for Visual Rhythm
**Key Insight:** Numbered markers add visual interest and show sequence
**Content:**
- Gradient-filled circles with numbers (32px diameter)
- Positioned to the left of content
- Creates visual rhythm and guides eye
- Indicates sequence and importance
**Code Example:** CSS for numbered marker circles with gradients
**Application:** Sequential content, discovery processes, step-by-step guides

---

## Slide 21: Font Selection Strategy
**Key Insight:** Choose one enterprise-grade sans-serif and commit to it
**Content:**
- Inter: Neutral, readable, modern (recommended for business)
- Roboto: Geometric, friendly, versatile
- Helvetica Neue: Classic, timeless, professional
- DM Sans: Contemporary, distinctive
- Space Grotesk: Geometric, bold, tech-forward
**Rule:** Use ONE primary font family, maximum TWO if pairing serif + sans-serif
**Benefit:** Professional appearance, brand consistency, readability

---

## Slide 22: Font Weight Hierarchy System
**Key Insight:** Use four weights (300, 400, 600, 700) for clear typographic hierarchy
**Content:**
- 300 (Light): Subtitles, secondary text
- 400 (Regular): Body text, descriptions
- 600 (Semi-bold): Section titles, emphasis
- 700 (Bold): Main titles, primary focus
**Rule:** Avoid weight 500 unless absolutely necessary
**Benefit:** Clear visual hierarchy, professional appearance, reduced complexity

---

## Slide 23: Spacing Scale Best Practices
**Key Insight:** Establish a consistent spacing scale and use it throughout
**Content:**
- xs: 8px (minimal spacing)
- sm: 12px (tight spacing)
- md: 16px (standard spacing)
- lg: 24px (generous spacing)
- xl: 32px (large spacing)
- 2xl: 48px (extra large spacing)
**Rule:** Use only these values, never arbitrary spacing
**Benefit:** Visual consistency, professional appearance, easier maintenance

---

## Slide 24: Contrast & Accessibility Standards
**Key Insight:** Maintain WCAG AA contrast ratios for accessibility and professionalism
**Content:**
- White on dark background: 7:1 contrast (always safe)
- Dark on light background: 7:1 contrast (always safe)
- Light on light: Never use (insufficient contrast)
- Dark on dark: Never use (insufficient contrast)
**Quick Check:** Use online contrast ratio checkers before finalising
**Benefit:** Accessible to all users, professional appearance, legal compliance

---

## Slide 25: Workflow Efficiency Tips
**Key Insight:** Maximise efficiency through strategic planning and batching
**Content:**
- Batch similar slides: Build all 3-column grids together, all lists together
- Copy-paste CSS: Use reference slide as template, only change content
- Test incrementally: Check each slide for height and visual hierarchy
- Use CSS variables: Update entire presentation by changing variables
- Document decisions: Keep style guide for consistency across projects
**Benefit:** Faster execution, fewer errors, consistent results

---

## Slide 26: The Essential Checklist
**Key Insight:** Use this checklist to ensure every presentation meets quality standards
**Content:**
- Design Philosophy: Chosen and documented
- Colour Palette: 3 colours defined (primary, secondary, accent)
- Typography: 1 font family, 4 weights (300, 400, 600, 700)
- Spacing Scale: Defined (8px, 12px, 16px, 24px, 32px, 48px)
- Layout Patterns: Varied across 12 slides
- Content Outline: All 12 slides mapped with layout types
- CSS Architecture: Organised and consistent
- Contrast: All text meets WCAG AA standards
- Height: All slides < 720px minimum
- Typography Hierarchy: Clear size and weight differentiation
- Visual Indicators: Consistent use of accents, borders, icons
- Content Density: Text is concise and scannable
- Alignment: Elements aligned to grid
- Consistency: Styles applied uniformly across all slides
**Benefit:** Ensures professional, polished presentations every time

---

## Slide 27: Conclusion - The 30-70 Rule Revisited
**Key Insight:** Better planning leads to exponentially better output
**Content:**
- 30% Planning: Design philosophy, content outline, template creation
- 70% Execution: Building, maintaining consistency, optimisation
- Result: Beautiful, professional presentations delivered efficiently
- Key Principle: Invest time upfront to save time and improve quality
**Takeaway:** The presentations that look effortlessly beautiful are the ones where the designer invested significant time upfront in planning and design systems
**Call to Action:** Apply these principles to your next presentation and experience the difference

---

## Slide 28: Quick Reference Guide
**Key Insight:** Keep this guide handy for quick reference during presentation building
**Content:**
- Typography Scale: 12px → 14px → 18px → 20px → 24px → 48px
- Spacing Scale: 8px, 12px, 16px, 24px, 32px, 48px
- Colour Palette: 60% primary, 30% secondary, 10% accent
- Font Weights: 300, 400, 600, 700
- Line Heights: Titles 1.2, Body 1.6, Labels 1.0
- Layout Patterns: 5 proven patterns for different content types
- CSS Architecture: 7 layers from base to interactive
- Contrast Ratios: 7:1 minimum for accessibility
**Benefit:** Quick reference for consistent, professional results

---

**End of Outline**

*This outline provides comprehensive coverage of all key concepts, techniques, and best practices for building beautiful PowerPoint presentations with Manus AI. Each slide is designed to be visually engaging, information-dense, and actionable.*
