# Keyboard, Mouse & Drag Drop in Playwright

## 1. Keyboard Actions

### Basic Key Press
```typescript
// Press a single key
await page.keyboard.press('Enter');

// Type text
await page.keyboard.type('Hello World');

// Press multiple keys in sequence
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
```

### Common Keyboard Keys
| Key | Description |
|-----|-------------|
| `Enter` | Submits forms, confirms actions |
| `Tab` | Moves focus to next element |
| `Escape` | Closes modals, cancels actions |
| `Backspace` | Deletes character before cursor |
| `Delete` | Deletes character after cursor |
| `ArrowUp/Down/Left/Right` | Navigation keys |
| `Home` | Moves cursor to start of line |
| `End` | Moves cursor to end of line |
| `PageUp/PageDown` | Scroll page up/down |
| `Space` | Selects checkbox, triggers button |

### Modifier Keys
```typescript
// Ctrl + Key
await page.keyboard.press('Control+A');  // Select All
await page.keyboard.press('Control+C');  // Copy
await page.keyboard.press('Control+V');  // Paste
await page.keyboard.press('Control+X');  // Cut
await page.keyboard.press('Control+Z');  // Undo

// Shift + Key
await page.keyboard.press('Shift+Tab');  // Move focus backward
await page.keyboard.press('Shift+Click'); // Multi-select

// Alt + Key
await page.keyboard.press('Alt+F4');  // Close window
```

### Key Down & Key Up
```typescript
// Hold down a key (e.g., for drag selection)
await page.keyboard.down('Shift');
await page.keyboard.press('ArrowRight');
await page.keyboard.up('Shift');

// Type with key down (simulate holding)
await page.keyboard.down('a');
await page.waitForTimeout(1000);
await page.keyboard.up('a');
```

### Press Sequence
```typescript
// Press sequence of keys
await page.keyboard.pressSequentially('Hello World');

// Type character by character with delay
await page.keyboard.pressSequentially('Hello', { delay: 100 });
```

---

## 2. Mouse Actions

### Click Operations
```typescript
// Simple click
await page.click('#button');

// Click at specific coordinates
await page.mouse.click(100, 200);

// Double click
await page.dblclick('#element');
await page.mouse.dblclick(100, 200);

// Right click (context menu)
await page.click('#element', { button: 'right' });
await page.mouse.click(100, 200, { button: 'right' });
```

### Mouse Down & Mouse Up
```typescript
// Press and hold mouse button
await page.mouse.down();

// Release mouse button
await page.mouse.up();

// Example: Click and hold
await page.mouse.move(100, 200);
await page.mouse.down();       // Press down
await page.waitForTimeout(500);
await page.mouse.up();         // Release
```

### Mouse Move
```typescript
// Move mouse to element
await page.mouse.move(100, 200);

// Move with steps (smooth movement)
await page.mouse.move(100, 200, { steps: 10 });

// Move relative to current position
await page.mouse.move(50, 0);  // Move 50px right
```

### Scroll
```typescript
// Scroll mouse wheel
await page.mouse.wheel(0, 100);  // Scroll down 100px
await page.mouse.wheel(0, -100); // Scroll up 100px
```

---

## 3. Drag and Drop

### Method 1: Using dragTo
```typescript
// Drag element to another element
const source = page.locator('#drag-source');
const target = page.locator('#drop-target');
await source.dragTo(target);
```

### Method 2: Manual Drag (Mouse Down/Move/Up)
```typescript
// Get element positions
const source = await page.locator('#drag-source').boundingBox();
const target = await page.locator('#drop-target').boundingBox();

// Perform drag
await page.mouse.move(source.x + source.width / 2, source.y + source.height / 2);
await page.mouse.down();
await page.waitForTimeout(200);

// Move to target in steps
await page.mouse.move(
    target.x + target.width / 2,
    target.y + target.height / 2,
    { steps: 10 }
);
await page.waitForTimeout(200);
await page.mouse.up();
```

### Method 3: Using Locator Drag
```typescript
// Drag to specific coordinates
await page.locator('#source').dragTo(page.locator('#target'), {
    targetPosition: { x: 50, y: 50 }
});
```

---

## 4. Hover Actions

### Basic Hover
```typescript
// Hover over element
await page.hover('#element');

// Hover using locator
await page.locator('#menu').hover();
```

### Hover with Mouse Move
```typescript
// Move to element coordinates
const box = await page.locator('#element').boundingBox();
await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
```

---

## 5. Practical Examples

### Example 1: Fill Form with Keyboard
```typescript
await page.goto('https://example.com/form');
await page.locator('#name').fill('');
await page.keyboard.type('John Doe');
await page.keyboard.press('Tab');
await page.keyboard.type('john@example.com');
await page.keyboard.press('Enter');
```

### Example 2: Select Text with Shift+Arrow
```typescript
await page.locator('#input').click();
await page.keyboard.press('Home');
await page.keyboard.down('Shift');
await page.keyboard.press('End');
await page.keyboard.up('Shift');
await page.keyboard.press('Control+C');
```

### Example 3: Drag and Drop Slider
```typescript
const slider = page.locator('#slider');
const box = await slider.boundingBox();

await page.mouse.move(box.x, box.y + box.height / 2);
await page.mouse.down();
await page.mouse.move(box.x + 200, box.y + box.height / 2, { steps: 20 });
await page.mouse.up();
```

### Example 4: Right Click Context Menu
```typescript
await page.locator('#element').click({ button: 'right' });
await page.locator('.context-menu-item').click();
```

### Example 5: Hover to Reveal Dropdown
```typescript
await page.locator('#nav-menu').hover();
await page.locator('.dropdown-item').click();
```

---

## 6. Quick Reference Table

| Action | Method |
|--------|--------|
| Type text | `page.keyboard.type()` or `locator.fill()` |
| Press key | `page.keyboard.press()` |
| Hold key | `page.keyboard.down()` / `page.keyboard.up()` |
| Click | `page.mouse.click()` or `locator.click()` |
| Double click | `page.mouse.dblclick()` or `locator.dblclick()` |
| Right click | `locator.click({ button: 'right' })` |
| Mouse down | `page.mouse.down()` |
| Mouse up | `page.mouse.up()` |
| Mouse move | `page.mouse.move()` |
| Scroll | `page.mouse.wheel()` |
| Hover | `locator.hover()` or `page.mouse.move()` |
| Drag & Drop | `locator.dragTo()` or manual mouse events |
