# Performance Testing Checklist

## Local Testing Steps

### 1. Build & Bundle Analysis
```bash
# Run production build
pnpm run build

# Check bundle sizes in the output above
# Key metrics:
# - Home page: 210 KB First Load JS (✓ Good)
# - Service pages: 159-173 KB each (✓ Good)
```

### 2. Image Size Validation
```bash
# Verify service card images are optimized
find public/images/services -name "hero-*.jpg" -exec ls -lh {} \;

# Expected sizes (all < 3MB):
# ✓ 699K - design-3d/hero-design.jpg
# ✓ 1.3M - calfeutrage/hero-calfeutrage.jpg  
# ✓ 1.0M - revetements-exterieurs/hero-revetement.jpg
# ✓ 2.3M - peinture-spray/hero-peinture.jpg
# ✓ 1.7M - portes-fenetres/hero-porte-fenetre.jpg
# ✓ 5.0M - gouttieres/service-installation.jpg (CHANGED from 22MB)
# ✓ 247K - isolation-exterieure/materiau-fibre.jpg (CHANGED from 24MB)
```

### 3. Console Warnings Check
- [ ] Open Chrome DevTools
- [ ] Refresh home page with cache cleared
- [ ] Check Network tab - should see 5 preloaded images
- [ ] Verify NO preload warnings
- [ ] Verify NO deprecated meta tag warnings

### 4. Network Simulation Testing
- [ ] Open Chrome DevTools → Network tab
- [ ] Set throttling to "Slow 3G"
- [ ] Clear cache and refresh
- [ ] Measure time until service cards appear
- [ ] Scroll to see lazy loading behavior

### 5. Preload Validation
- [ ] Network tab should show: 
  - hero-background.jpg (preload)
  - hero-peinture.jpg (preload) 
  - hero-revetement.jpg (preload)
  - hero-calfeutrage.jpg (preload)
  - hero-porte-fenetre.jpg (preload)
- [ ] Other 3 service images should load when scrolled

## Production Testing

### 1. Deploy to Vercel
```bash
git push origin main
```

### 2. Online Testing Tools
- [ ] **Google PageSpeed Insights**: https://pagespeed.web.dev/
  - Test: https://www.r2pro.ca
  - Expected improvement: +10-20 points
  
- [ ] **GTmetrix**: https://gtmetrix.com/
  - Test home page
  - Focus on: Largest Contentful Paint (LCP), Time to Interactive

- [ ] **WebPageTest**: https://www.webpagetest.org/
  - Test with "Mobile 4G" connection
  - Check filmstrip view for visual loading

### 3. Real User Testing
- [ ] Test on mobile device (actual phone)
- [ ] Test slow connection (turn on LTE instead of WiFi)
- [ ] Measure perceived performance improvement

## Performance Targets Before vs After

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Total Service Image Load | ~75MB | ~10MB | -87% |
| Preload Warnings | 11+ warnings | 0 warnings | -100% |
| LCP (Estimated) | 4-6s | 2-3s | 40-50% faster |
| First 4 Service Cards | Slow load | Instant | Huge improvement |

## Next Steps After Testing

1. **If results are good**: ✓ Done!
2. **If still slow**: Consider WebP format conversion
3. **For further optimization**: Implement intersection observer for more aggressive lazy loading

## Rollback Plan
If issues occur:
```bash
git revert HEAD~1  # Undo performance changes
git push origin main
```
