# Production Deployment Lessons Learned

## Date: December 16, 2025

---

## Challenges Faced

### 1. **Page Not Found (404 Error)**

- **Issue**: After deploying to Netlify, the site showed "Page not found" error
- **URL**: https://community-event.netlify.app
- **Symptom**: Even though deployment was successful, accessing the site resulted in 404

### 2. **Broken Links**

- **Issue**: Direct navigation to any route resulted in 404 errors
- **Impact**: Users couldn't access any page directly via URL

---

## Root Causes Identified

### 1. **Missing Netlify Configuration File**

- No `netlify.toml` file existed in the project
- Netlify didn't know the correct publish directory
- Build settings were only configured in Netlify UI (not version-controlled)

### 2. **Incorrect Publish Directory**

- Angular builds to: `dist/community-event-ind-ui-temp`
- Netlify was likely looking in default `dist/` or project root
- Files existed but were in the wrong location from Netlify's perspective

### 3. **SPA Routing Not Properly Configured**

- While `_redirects` file existed with correct content (`/* /index.html 200`)
- Without proper Netlify configuration, the redirect rules weren't being applied correctly
- Angular uses client-side routing, but server didn't know to serve `index.html` for all routes

### 4. **Wildcard Route Configuration**

- Default wildcard route (`**`) was redirecting to `/events` instead of `/home`
- Not a critical issue but not ideal for user experience

---

## Solutions Implemented

### 1. **Created `netlify.toml` Configuration**

```toml
[build]
  command = "npm run build"
  publish = "dist/community-event-ind-ui-temp"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Why this works:**

- Explicitly tells Netlify where to find built files
- Configures SPA redirect rule at infrastructure level
- Version-controlled (committed to repository)
- Overrides any UI configuration

### 2. **Updated Angular Routing**

- Changed wildcard route from `/events` to `/home`
- Explicitly set `useHash: false` in router configuration
- Ensured default route (`''`) redirects to `/home`

**File**: `src/app/app-routing.module.ts`

```typescript
{ path: '**', redirectTo: '/home' }
// Instead of: { path: '**', redirectTo: '/events' }

RouterModule.forRoot(routes, { useHash: false })
```

### 3. **Verified Build Output**

- Confirmed `_redirects` file is included in build assets
- Checked `angular.json` assets array includes `"src/_redirects"`
- Build process successfully copies file to output directory

---

## Key Lessons Learned

### 1. **Always Use netlify.toml for SPA Projects**

- **Never rely solely on UI configuration** - it's not version-controlled
- `netlify.toml` should be the first file created after initializing deployment
- Critical for Angular, React, Vue, and other SPA frameworks

### 2. **Understand Your Build Output Structure**

- Know exactly where your framework builds files
- Match `publish` directory to your actual build output path
- Use `npm run build` locally to verify structure

### 3. **SPA Redirect Rules Are Non-Negotiable**

- Client-side routing requires server configuration
- Without redirects, only root URL works
- All routes must serve `index.html` with 200 status (not 301/302)

### 4. **Test Deployment Configuration Early**

- Don't wait until project is complete to test deployment
- Deploy early and often to catch configuration issues
- Use Netlify's deploy preview for testing

### 5. **Documentation Matters**

- Reference Netlify's official documentation and support guides
- Common issues are well-documented
- Support guides provide specific solutions for frameworks

### 6. **Build Locally Before Deploying**

- Run `npm run build` to verify build works
- Check `dist/` folder structure manually
- Ensure all assets (\_redirects, favicon, etc.) are copied

### 7. **Version Control Everything**

- All configuration should be in repository
- Easier to debug when settings are in code
- Team members can see and review changes

---

## Deployment Checklist for Future Projects

- [ ] Create `netlify.toml` with correct `publish` directory
- [ ] Add SPA redirect rules (`/* /index.html 200`)
- [ ] Configure build command in `netlify.toml`
- [ ] Verify `_redirects` file exists and is in assets
- [ ] Test build locally (`npm run build`)
- [ ] Check routing configuration (default and wildcard routes)
- [ ] Set up environment variables if needed
- [ ] Test on Netlify preview before production
- [ ] Verify all routes work after deployment
- [ ] Check browser console for errors
- [ ] Test in incognito/private mode (to avoid cache issues)

---

## Useful Resources

### Netlify Documentation

- [File-based configuration](https://docs.netlify.com/configure-builds/file-based-configuration/)
- [SPA redirect rules](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)
- [Deploy troubleshooting](https://docs.netlify.com/configure-builds/troubleshooting-tips/)

### Angular Deployment

- [Angular deployment guide](https://angular.io/guide/deployment)
- [Router configuration](https://angular.io/api/router/ExtraOptions)

---

## What Worked

✅ `netlify.toml` configuration with explicit publish directory  
✅ SPA redirect rules in both `_redirects` and `netlify.toml`  
✅ Correct Angular router configuration  
✅ Version-controlled deployment settings  
✅ Following Netlify's official support guide recommendations

---

## Time Saved for Future

By documenting this, future deployments should be:

- **Faster**: No trial and error with configuration
- **More reliable**: Tested configuration patterns
- **Easier to debug**: Known issues and solutions documented
- **Team-friendly**: Others can learn from these experiences

---

## Notes

- The `_redirects` file is still useful as a fallback
- `netlify.toml` takes precedence over `_redirects`
- Always check Netlify deploy logs for build errors
- Clear browser cache when testing deployed changes
- Use hard refresh (Ctrl+F5) to bypass cache

---

_Remember: Configuration issues are the most common cause of deployment problems. Getting the config right saves hours of debugging!_
