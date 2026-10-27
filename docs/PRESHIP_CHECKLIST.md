# Pre-ship checklist

Run through this before merging `dev` into `main`. Items marked **[auto]** are enforced by CI or pre-commit; the rest are manual. Delete sections that don't apply (e.g. Mobile app extras for a web-only project) rather than leaving them unticked.

## 1. Repo and secrets hygiene
- [ ] `.gitignore` + `.env.example` in place; no real secrets committed **[auto: gitleaks]**
- [ ] Full git history scanned once: `gitleaks detect --source .`
- [ ] Secrets only in env vars / secrets manager, never hardcoded
- [ ] Repo private by default; branch protection on `main` with PR reviews required
- [ ] GitHub secret scanning + push protection enabled
- [ ] Dependabot + CodeQL enabled **[auto: .github/]**
- [ ] Production never serves `/.git`

## 2. Legal, compliance and trust
- [ ] Privacy Policy (data collected, why, third parties, retention, deletion rights)
- [ ] Terms of Service
- [ ] Cookie Policy + consent banner that gates non-essential scripts
- [ ] Refund / cancellation policy (if selling)
- [ ] Real contact / support email (and physical address if required)
- [ ] Third-party embeds and data collection disclosed
- [ ] No unlicensed images; local laws checked
- [ ] No fake reviews or fabricated claims

## 3. SEO and discoverability
- [ ] Unique meta title + description on every page
- [ ] Open Graph image + Twitter cards
- [ ] Favicon (all sizes) + apple-touch-icon
- [ ] `robots.txt` allows important pages, blocks admin/staging
- [ ] XML sitemap with canonical, indexable URLs only
- [ ] Sitemap submitted to Google Search Console + Bing Webmaster Tools
- [ ] Canonical tags correct (self-referencing, right domain/protocol)
- [ ] Staging `noindex` / Disallow rules removed
- [ ] Alt text on every image
- [ ] Schema markup where useful (Organization, FAQ, Product, ...)
- [ ] Google Business Profile (if local); listed on relevant review sites

## 4. UX, UI and functionality
- [ ] Custom 404 and 500 pages with navigation
- [ ] CTA above the fold + sticky mobile CTA
- [ ] Responsive, checked on real devices
- [ ] Loading states / skeletons
- [ ] Form validation + clear error states; thank-you page after forms
- [ ] Keyboard navigation + visible focus states
- [ ] Colour contrast meets WCAG
- [ ] Cross-browser tested
- [ ] Core flows work end-to-end (signup, login, checkout, ...)

## 5. Performance
- [ ] Lighthouse / PageSpeed, mobile-first
- [ ] LCP <= 2.5s, INP <= 200ms, CLS <= 0.1
- [ ] Images optimised (WebP/AVIF, lazy load, correct sizes)
- [ ] CSS/JS minified, render-blocking resources reduced **[auto: next build]**
- [ ] Caching + CDN configured
- [ ] Tested on real mobile networks

## 6. Analytics and monitoring
- [ ] GA4 (or equivalent) + conversion events
- [ ] Google Search Console and Bing Webmaster Tools verified
- [ ] Error / crash monitoring live (Sentry etc.)
- [ ] Uptime monitoring
- [ ] Real-user Core Web Vitals monitoring (optional)

## 7. Security
- [ ] HTTPS everywhere + HSTS; HTTP forced to HTTPS; no mixed content
- [ ] Security headers (CSP, X-Content-Type-Options, Referrer-Policy, ...)
- [ ] No secrets in frontend, Network tab or source maps
- [ ] Authorization on every endpoint (no IDOR; tenant isolation)
- [ ] Passwords hashed with bcrypt / Argon2
- [ ] Rate limiting on login, reset and sensitive forms
- [ ] Admin panels protected; default credentials changed
- [ ] Sensitive data encrypted at rest
- [ ] Input validation + output encoding
- [ ] Dependencies and platform up to date **[auto: npm audit, Dependabot]**
- [ ] Automated backups, restore tested

## 8. Mobile app extras
- [ ] Privacy labels / Data Safety forms match real collection and SDKs
- [ ] Account deletion flow (in-app + public URL if required)
- [ ] Permissions requested just-in-time with a clear explanation
- [ ] Store listing assets, screenshots, content rating ready
- [ ] Test accounts prepared for review
- [ ] Crash reporting + analytics live
- [ ] Signing and release tracks configured
- [ ] Backend capacity / scaling tested
- [ ] No cleartext traffic (ATS / Network Security Config)
- [ ] Demo code excluded from the production bundle (see `AGENTS.md`)

## 9. Launch day and after
- [ ] DNS correct; MX records for email
- [ ] Staging blocks, placeholders and test data removed
- [ ] Forms tested end-to-end, including error paths and email notifications
- [ ] Sitemap submitted; key pages requested for indexing
- [ ] Search Console watched for crawl/coverage errors
- [ ] Analytics, error logs and uptime watched for 48-72 hours
- [ ] Rollback / incident plan ready

## Ship flow
```bash
git checkout dev && git pull
npm run lint && npm run typecheck && npm run build
git checkout main && git pull && git merge --no-ff dev && git push origin main
git checkout dev
```
