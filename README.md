# Unexpected useEffect Behavior in Next.js 15 Navigation

This repository demonstrates an unexpected behavior observed in a Next.js 15 application involving the `useEffect` hook and navigation between pages.  The `About` page's `useEffect` hook's `console.log` statements for component mount and unmount are not consistently appearing, suggesting a potential problem with component lifecycle management during routing.

## Bug Description

The application consists of two pages: `Home` and `About`.  Navigating to the `About` page should log "Component mounted", and navigating away from it should log "Component unmounted". However, this behavior is inconsistent and unreliable. The logs may only appear on subsequent navigations.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate between the Home and About pages. Observe the console logs in your browser's developer tools.

## Expected Behavior

"Component mounted" should be logged when navigating to the About page.  "Component unmounted" should be logged when navigating away from the About page.  This should occur consistently for each navigation.

## Actual Behavior

The console logs may appear inconsistently or not at all.

## Potential Causes

- Possible issues related to Next.js 15's new routing system or edge runtime.
- Incorrect use of the `useEffect` hook within the component context.

## Solution (In about.js)

Adding a dependency to the useEffect hook to explicitly include the route changes makes the behavior reliable.