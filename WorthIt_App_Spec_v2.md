# WorthIt — App Spec v2.0

**One-liner:** Know the real cost before you buy — calculate the price per use of anything in seconds.

**Monetisation:** One-time purchase — £2.49 / $2.99. No subscription. No ads. No in-app purchases. You buy it, you own it.

**Platforms:** iOS + Android (React Native + EAS Builds)

**Markets:** UK and US primary, translated and global from launch.

---

## Core Concept

WorthIt is a pre-purchase decision tool. You're in a shop or browsing online, wondering if something is worth buying. You open the app, punch in the price and how often you think you'll use it, and instantly see the real cost per use — with a clear verdict.

It's NOT a budget tracker, wardrobe app, or expense manager. It does one thing brilliantly.

---

## Feature Breakdown

---

### Feature 1: Cost Per Use Calculator (Core Screen)

The main screen. The reason the app exists.

**Inputs:**
- Item name (optional — e.g. "Dr Martens 1460")
- Price (with currency — £ / $ / € / auto-detect)
- Category + Subcategory selector (see Feature 6: Benchmarks)
- Usage frequency — how often will you use this? (daily / 5x week / 3x week / 2x week / weekly / fortnightly / monthly / rarely)
- Lifespan — how long will it last? (6 months / 1 year / 2 years / 3 years / 5 years / 10 years)

**Smart defaults:** Selecting a category and subcategory auto-fills frequency, lifespan, AND verdict thresholds from the benchmarks system. User can always adjust.

**Output — Result Card:**
- Cost per use in large, bold text (e.g. "£0.42 per use")
- Colour-coded verdict badge based on the category/subcategory benchmarks:
  - 🟢 **Worth It** — below the Worth It threshold
  - 🟡 **Think Twice** — between Worth It and Skip It thresholds
  - 🔴 **Skip It** — above the Skip It threshold
- Relatable comparison line (e.g. "That's less than a coffee each time you use it")
- Result animates in with a satisfying micro-animation

---

### Feature 2: Compare Mode

Side-by-side comparison of two options — cheap vs. expensive, Brand A vs. Brand B.

**How it works:**
- Two-column layout, same inputs as the calculator
- Both calculate simultaneously
- Clear winner highlighted with a summary:
  - "The £200 boots cost £1.33/use vs the £30 boots at £6.00/use — the expensive pair is 4.5x better value"
- Helps users justify quality purchases or avoid expensive traps

---

### Feature 3: Saved Items

A simple list of past calculations with optional images.

**Each row shows:**
- Item image thumbnail (if added)
- Item name
- Price
- Cost per use
- Category / subcategory tag
- Verdict badge (colour-coded)

**Image upload:**
- Optional — user can attach a photo of the item when saving
- Tap "Add Photo" to choose from camera or photo library
- Image stored locally on device (no cloud, no account needed)
- Can be added at save time or edited later
- Displayed as a thumbnail in the saved items list and full-size when viewing the item detail

**Actions:**
- Tap to re-open and edit (including adding/changing photo)
- Swipe to delete
- Unlimited saves

---

### Feature 4: Share Card

Tapping "Share" on any result generates a clean, branded card image.

**Card shows:**
- Item image (if uploaded)
- Item name
- Price → cost per use
- Verdict badge
- Subtle WorthIt branding/watermark

**Optimised for:**
- Instagram Stories (9:16 aspect)
- TikTok
- iMessage / WhatsApp
- X / Twitter

This is critical for organic growth — the shareable card IS the marketing.

---

### Feature 5: Worth It Tracker (v1.1 / v2 — post-launch)

For items already purchased. Turns the calculator into a lightweight tracker.

**How it works:**
1. From any saved calculation, tap "Track This"
2. Enter a **date purchased**
3. Set a **target cost per use** (e.g. £1/use)
4. App calculates a **"Worth It By" date** — the date you'll hit your target based on estimated usage

**Logging uses:**
- Simple "+1 Use" button — tap it whenever you use the item
- No calendar, no daily prompts, no photos, no logging what you used it for

**Item states:**
- 🟢 **Active** — still own it, still using it. The default state.
- ⚫ **Done** — sold, binned, given away. Moves to archive with a final cost-per-use "report card."

Active items sit on the tracking list. The user can dip in to log a use or just check progress. No obligation to log daily.

**Running display per tracked item:**
- Item image (if uploaded)
- Item name
- Cost per use so far (updates with each logged use)
- Uses logged
- Progress bar toward target
- Worth It By date
- Status indicator (on track / needs more use / ✅ goal reached)

**Example:**
> 🟢 **Dr Martens 1460** — £4.20/use — 48 uses — Worth It by Dec 2027
> 🟡 **KitchenAid Mixer** — £12.50/use — 8 uses — needs more use
> ✅ **Winter Coat** — £0.80/use — goal reached!
> ⚫ **Old Trainers** — Done — final: £0.60/use

**Two tracking modes (per item toggle):**

| Mode | "Worth It By" date | Best for |
|------|-------------------|----------|
| **Manual (default)** | Locked to the original calculated date. Doesn't change as you log uses. Just a simple counter — log uses, watch cost per use drop. | Casual users who log here and there |
| **Auto-updating** | Recalculates live based on actual usage pace. If you slow down, date pushes out. If you speed up, it pulls in. | Users who want the live prediction |

Toggle label on each item: **"Update target date with usage"** — off by default.

---

### Feature 6: Benchmarks System

Category and subcategory benchmarks that power the verdict system. Each subcategory comes with preset defaults for usage frequency, lifespan, and verdict thresholds. Users can customise everything and reset to defaults.

#### How it works

When a user selects a category and subcategory in the calculator, three things auto-populate:
1. **Default usage frequency** (e.g. Outerwear → 3x/week)
2. **Default lifespan** (e.g. Outerwear → 5 years)
3. **Verdict thresholds** — the cost-per-use boundaries for Worth It / Think Twice / Skip It

The user can adjust any of these per calculation, or go into Settings → Benchmarks to permanently change the defaults for any subcategory.

#### Preset Categories and Subcategories

**Clothing**

| Subcategory | Default Frequency | Default Lifespan | Worth It (under) | Think Twice | Skip It (over) |
|------------|------------------|-----------------|-----------------|-------------|---------------|
| Outerwear (coats, jackets) | 3x/week | 5 years | £0.50/use | £0.50–£2.00 | £2.00/use |
| Tops (t-shirts, shirts, blouses) | 1x/week | 2 years | £0.30/use | £0.30–£1.00 | £1.00/use |
| Bottoms (jeans, trousers, skirts) | 2x/week | 3 years | £0.30/use | £0.30–£1.00 | £1.00/use |
| Footwear (everyday) | 4x/week | 3 years | £0.50/use | £0.50–£1.50 | £1.50/use |
| Footwear (formal/occasion) | 1x/month | 5 years | £2.00/use | £2.00–£5.00 | £5.00/use |
| Accessories (bags, belts, hats) | 3x/week | 4 years | £0.40/use | £0.40–£1.50 | £1.50/use |
| Sportswear / Activewear | 3x/week | 1 year | £0.30/use | £0.30–£1.00 | £1.00/use |

**Electronics**

| Subcategory | Default Frequency | Default Lifespan | Worth It (under) | Think Twice | Skip It (over) |
|------------|------------------|-----------------|-----------------|-------------|---------------|
| Smartphones / Tablets | Daily | 3 years | £0.50/use | £0.50–£1.50 | £1.50/use |
| Laptops / Computers | Daily | 5 years | £0.50/use | £0.50–£1.50 | £1.50/use |
| Headphones / Earbuds | Daily | 2 years | £0.20/use | £0.20–£0.75 | £0.75/use |
| Cameras | 1x/week | 5 years | £1.00/use | £1.00–£4.00 | £4.00/use |
| Gaming Consoles | 3x/week | 5 years | £0.50/use | £0.50–£2.00 | £2.00/use |
| Smart Home (speakers, hubs) | Daily | 3 years | £0.10/use | £0.10–£0.50 | £0.50/use |
| Wearables (watches, fitness) | Daily | 3 years | £0.30/use | £0.30–£1.00 | £1.00/use |

**Kitchen**

| Subcategory | Default Frequency | Default Lifespan | Worth It (under) | Think Twice | Skip It (over) |
|------------|------------------|-----------------|-----------------|-------------|---------------|
| Daily Appliances (kettle, toaster, coffee maker) | Daily | 5 years | £0.05/use | £0.05–£0.20 | £0.20/use |
| Occasional Appliances (blender, food processor, mixer) | 2x/week | 5 years | £0.20/use | £0.20–£1.00 | £1.00/use |
| Cookware (pans, pots, baking trays) | 3x/week | 5 years | £0.10/use | £0.10–£0.50 | £0.50/use |
| Knives / Utensils | Daily | 10 years | £0.02/use | £0.02–£0.10 | £0.10/use |
| Specialist (bread maker, ice cream maker, sous vide) | 1x/week | 5 years | £0.50/use | £0.50–£2.00 | £2.00/use |

**Fitness**

| Subcategory | Default Frequency | Default Lifespan | Worth It (under) | Think Twice | Skip It (over) |
|------------|------------------|-----------------|-----------------|-------------|---------------|
| Gym Equipment (dumbbells, bench, rack) | 3x/week | 10 years | £0.20/use | £0.20–£1.00 | £1.00/use |
| Cardio (treadmill, bike, rower) | 3x/week | 5 years | £0.50/use | £0.50–£2.00 | £2.00/use |
| Yoga / Pilates (mat, blocks, bands) | 3x/week | 2 years | £0.10/use | £0.10–£0.50 | £0.50/use |
| Sports Equipment (rackets, balls, clubs) | 2x/week | 3 years | £0.30/use | £0.30–£1.50 | £1.50/use |
| Fitness Accessories (water bottle, gym bag, gloves) | 5x/week | 2 years | £0.05/use | £0.05–£0.20 | £0.20/use |

**Furniture**

| Subcategory | Default Frequency | Default Lifespan | Worth It (under) | Think Twice | Skip It (over) |
|------------|------------------|-----------------|-----------------|-------------|---------------|
| Seating (sofa, armchair, office chair) | Daily | 10 years | £0.15/use | £0.15–£0.50 | £0.50/use |
| Tables (dining, desk, coffee table) | Daily | 10 years | £0.10/use | £0.10–£0.30 | £0.30/use |
| Bedroom (bed frame, mattress) | Daily | 10 years | £0.10/use | £0.10–£0.30 | £0.30/use |
| Storage (shelving, wardrobes, drawers) | Daily | 10 years | £0.05/use | £0.05–£0.20 | £0.20/use |
| Outdoor (garden furniture, BBQ) | 1x/week | 5 years | £0.50/use | £0.50–£2.00 | £2.00/use |

**Other**

| Subcategory | Default Frequency | Default Lifespan | Worth It (under) | Think Twice | Skip It (over) |
|------------|------------------|-----------------|-----------------|-------------|---------------|
| Books / Media | 1x (one-time use) | N/A | £3.00/use | £3.00–£8.00 | £8.00/use |
| Tools / DIY | 1x/month | 10 years | £0.20/use | £0.20–£1.00 | £1.00/use |
| Travel Gear (luggage, travel pillows) | 1x/month | 5 years | £0.50/use | £0.50–£3.00 | £3.00/use |
| Baby / Kids (gear, toys) | Daily | 1 year | £0.10/use | £0.10–£0.50 | £0.50/use |
| Pet Supplies | Daily | 2 years | £0.05/use | £0.05–£0.20 | £0.20/use |
| Stationery / Office | 3x/week | 2 years | £0.05/use | £0.05–£0.20 | £0.20/use |

#### Editing Preset Benchmarks

**Location:** Settings → Benchmarks → select a category → select a subcategory

**What users can change per subcategory:**
- Default usage frequency
- Default lifespan
- Worth It threshold
- Skip It threshold (Think Twice fills the gap automatically)

**Reset to Default button** — always visible when editing a preset subcategory. One tap reverts that subcategory to the shipped defaults. Per-subcategory reset, not a global nuke.

#### Custom Categories and Subcategories

**Users can:**
- Add entirely new categories (e.g. "Music" or "Hobbies")
- Add new subcategories under any category — preset or custom (e.g. add "Vintage / Second-hand" under Clothing)
- Set their own frequency, lifespan, and verdict thresholds for custom entries

**No default thresholds for custom entries** — the user sets them. But to help them figure out sensible thresholds, there's a **Calculator Helper**.

#### Calculator Helper (for setting custom thresholds)

When creating a custom category or subcategory, the user needs to set Worth It / Skip It thresholds. Most people won't intuitively know what a "good" cost per use is for their niche item.

**How it works:**

A button labelled **"Help me set this"** (or similar) opens a mini calculator right there in the threshold-setting screen.

**Flow:**
1. User taps "Help me set this"
2. A mini calculator appears — same inputs as the main calculator (price, frequency, lifespan)
3. User enters an example item they consider good value (e.g. "I bought a guitar for £300 and I play it 3x/week, it'll last 10 years")
4. The app calculates: "That's £0.19 per use"
5. A short explanation appears: "If you'd be happy paying around £0.19 every time you use a guitar, consider setting your 'Worth It' threshold around £0.20–£0.25. Items costing more per use than you're comfortable with should be your 'Skip It' threshold."
6. User can tap "Use this as Worth It threshold" to auto-fill, or manually type their own numbers
7. Optionally, they can run a second example for a "bad value" item to inform the Skip It threshold

**The explanation text adapts to the result:**
- Low cost per use (under £0.50): "At £0.19 per use, this is very cheap per use. Setting your 'Worth It' threshold around £0.20–£0.25 means only items as good value as this will get a green badge."
- Medium cost per use (£0.50–£5): "At £2.30 per use, this is moderate. If this feels about right for what you'd pay per use, set your 'Worth It' threshold around £2.50."
- High cost per use (over £5): "At £8.50 per use, this is on the expensive side. If this still feels worth it to you, set your threshold here — everyone's standards are different."

---

### Feature 7: Settings

- Default currency (GBP / USD / EUR / auto-detect from locale)
- Language selector
- Dark mode / Light mode toggle (or follow system)
- Benchmarks management (edit presets, add custom categories/subcategories)
- About / Privacy policy
- Rate the app link (triggers native review prompt)

---

## What This App is NOT

- ❌ Not a budget tracker or expense manager
- ❌ Not a wardrobe app — works for ANY product category
- ❌ Not a post-purchase diary or journal
- ❌ Not a subscription app
- ❌ Not freemium — full app from the moment you download
- ❌ No account creation, no login, no cloud sync
- ❌ No notifications or reminders
- ❌ No social features, friends, or community
- ❌ No AI anything
- ❌ No barcode scanning

---

## Design Direction

- Clean, minimal, modern — single-purpose utility tool aesthetic
- Dark mode and light mode
- Bold typography for the cost-per-use result
- Colour-coded verdicts: green / amber / red
- Satisfying micro-animation when result appears
- No onboarding flow — drop user straight into the calculator
- Maximum 2 taps to get a result
- Should feel instant and delightful — like a really good calculator

---

## Version Roadmap

### v1.0 — Launch
- Cost Per Use Calculator (Feature 1)
- Compare Mode (Feature 2)
- Saved Items with optional image upload (Feature 3)
- Share Card (Feature 4)
- Benchmarks system with all preset categories/subcategories (Feature 6)
- Custom categories/subcategories with Calculator Helper (Feature 6)
- Settings (Feature 7)

### v1.1 / v2.0 — Post-launch (once validated with real users)
- Worth It Tracker with use logging (Feature 5)
- Manual / Auto-updating toggle
- Active / Done item states
- Archived items with final report card

---

## Tech Stack

| Component | Choice |
|-----------|--------|
| Framework | React Native + Expo + EAS |
| Storage | react-native-mmkv (item data, benchmarks, preferences) |
| Image Storage | expo-file-system (photos saved to local app documents directory) |
| Image Picker | expo-image-picker (camera or photo library) |
| UI | NativeWind (Tailwind for RN) |
| Animations | React Native Reanimated + Moti |
| Analytics | Aptabase (privacy-first, GDPR-compliant) |
| Review Prompts | expo-store-review |

**Data architecture — all local, no backend:**

Saved items stored in MMKV as JSON. Images saved to the app's local documents directory via expo-file-system, with file path references stored in the item data. Benchmark customisations stored as overrides in MMKV — only user changes are persisted, defaults come from a bundled JSON config. If the user hasn't customised a subcategory, the app reads from the bundled defaults. If they have, it reads their override. Reset to default simply deletes the override.

---

## App Store Positioning

**Title:** WorthIt — Cost Per Use

**Subtitle:** Is It Worth Buying? Calculate.

**Category:** Utilities

**Price:** £2.49 / $2.99

**Screenshot strategy:**
1. Calculator in action — "£200 boots ÷ 150 uses = £1.33/use — Worth It ✅"
2. Compare mode — cheap vs expensive side by side
3. Saved items list with item photos
4. Benchmarks / category system
5. Text overlay: "One-time purchase. No subscription. No ads. Ever."
