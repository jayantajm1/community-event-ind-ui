# Community Events Platform - Design System

## Color Palette

### Primary Colors
- **Primary**: `#1976d2` - Main brand color used for buttons, links, and key UI elements
- **Primary Dark**: `#115293` - Hover states and emphasis
- **Primary Light**: `#4a90e2` - Accents and highlights
- **Primary Lighter**: `#e3f2fd` - Backgrounds and subtle accents

### Secondary Colors
- **Secondary**: `#f50057` - Call-to-action elements
- **Secondary Dark**: `#c51162` - Secondary hover states
- **Secondary Light**: `#ff4081` - Secondary accents

### Neutral Colors
- **Background**: `#f5f7fa` - Page background
- **Surface**: `#ffffff` - Card and component backgrounds
- **Border**: `#e0e6ed` - Component borders
- **Divider**: `#dee2e6` - Section dividers

### Text Colors
- **Primary Text**: `#2c3e50` - Main content text
- **Secondary Text**: `#6c757d` - Supporting text
- **Disabled Text**: `#adb5bd` - Disabled state text
- **White Text**: `#ffffff` - Text on dark backgrounds

### Status Colors
- **Success**: `#28a745` - Success messages and confirmations
- **Warning**: `#ffc107` - Warning messages
- **Error**: `#dc3545` - Error messages and alerts
- **Info**: `#17a2b8` - Informational messages

## Typography

### Font Family
- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

### Font Sizes
- **XS**: 0.75rem (12px)
- **SM**: 0.875rem (14px)
- **Base**: 1rem (16px)
- **LG**: 1.125rem (18px)
- **XL**: 1.25rem (20px)
- **2XL**: 1.5rem (24px)
- **3XL**: 1.875rem (30px)
- **4XL**: 2.25rem (36px)

### Headings
- **H1**: 2.25rem (36px) - Page titles
- **H2**: 1.875rem (30px) - Section headers
- **H3**: 1.5rem (24px) - Subsection headers
- **H4**: 1.25rem (20px) - Card titles
- **H5**: 1.125rem (18px) - Small headers
- **H6**: 1rem (16px) - Minor headers

## Spacing

Uses a consistent 4px base unit:
- **XS**: 4px
- **SM**: 8px
- **MD**: 16px
- **LG**: 24px
- **XL**: 32px
- **2XL**: 48px

## Border Radius

- **SM**: 4px - Small elements
- **MD**: 8px - Default buttons and inputs
- **LG**: 12px - Cards and containers
- **XL**: 16px - Large containers
- **Full**: 9999px - Pills and badges

## Shadows

- **SM**: Subtle shadow for hover states
- **MD**: Default card shadow
- **LG**: Elevated components
- **XL**: Modals and overlays

## Components

### Buttons
- Primary, Secondary, and Outline variants
- Small, Default, and Large sizes
- Hover and disabled states

### Cards
- Clean white background with subtle border
- Hover effect with shadow and lift
- Responsive grid layout

### Forms
- Consistent input styling
- Focus states with primary color
- Validation states (success, error, warning)

### Badges
- Color-coded status indicators
- Rounded pill shape
- Multiple semantic variants

### Alerts
- Success, Warning, Error, Info variants
- Consistent padding and borders
- Light background colors

## Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: < 768px
- **Desktop**: ≥ 768px

## Animation

### Transitions
- **Fast**: 150ms - Quick hover effects
- **Base**: 250ms - Standard transitions
- **Slow**: 350ms - Complex animations

### Keyframes
- **Spin**: Loading spinners (0.8s linear infinite)
- **SlideIn**: Entry animations (0.3s ease-out)

## Usage

### Importing Styles

The theme is automatically imported in `src/styles.css`:

```css
@import './styles/theme.css';
```

### Using CSS Variables

All theme values are available as CSS custom properties:

```css
.my-component {
  color: var(--primary-color);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
```

### Utility Classes

Quick styling without custom CSS:

```html
<div class="d-flex justify-content-between align-items-center gap-3 mt-4 mb-3">
  <button class="btn btn-primary btn-lg">Click Me</button>
  <span class="badge badge-success">New</span>
</div>
```

## Accessibility

- WCAG 2.1 AA compliant color contrast ratios
- Focus visible states on all interactive elements
- Semantic HTML structure
- Screen reader friendly markup

## Dark Mode Support

Basic dark mode support via `prefers-color-scheme`:
- Automatic color scheme detection
- Inverted backgrounds and borders
- Maintained text contrast

## Best Practices

1. **Use CSS variables** - Always prefer theme variables over hard-coded values
2. **Follow spacing scale** - Use defined spacing values for consistency
3. **Maintain hierarchy** - Use appropriate heading levels and font sizes
4. **Test responsiveness** - Check all breakpoints during development
5. **Preserve accessibility** - Maintain focus states and contrast ratios

## File Structure

```
src/
├── styles/
│   └── theme.css          # Theme variables
├── styles.css              # Global styles and utilities
└── app/
    ├── components/
    │   ├── header/
    │   │   └── header.component.css
    │   └── footer/
    │       └── footer.component.css
    └── pages/
        ├── home/
        │   └── home.component.css
        ├── event-list/
        │   └── event-list.component.css
        └── event-detail/
            └── event-detail.component.css
```

## Future Enhancements

- [ ] Add PrimeNG theme customization
- [ ] Implement complete dark mode theme
- [ ] Add animation library integration
- [ ] Create component style guide
- [ ] Add icon system documentation
