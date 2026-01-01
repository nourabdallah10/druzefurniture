# Deployment Guide: Deploying druzefurniture.com to GitHub Pages

This guide will walk you through deploying your website to GitHub Pages and connecting it to your GoDaddy domain.

## Prerequisites
- GitHub account
- GoDaddy account with domain druzefurniture.com
- Git installed on your computer

---

## Step 1: Prepare Your Local Repository

1. **Initialize Git (if not already done)**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **The necessary files are already created for you:**
   - `.github/workflows/deploy.yml` - GitHub Actions workflow for deployment
   - `public/CNAME` - Contains your domain name
   - `.nojekyll` - Prevents Jekyll processing

---

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository settings:
   - **Repository name**: `druzefurniture` (or any name you prefer)
   - **Description**: (optional) "Druze Furniture Website"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license (we already have files)
5. Click **"Create repository"**

---

## Step 3: Push Your Code to GitHub

1. **Connect your local repository to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/druzefurniture.git
   ```
   *(Replace YOUR_USERNAME with your actual GitHub username)*

2. **Push your code:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

---

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** tab (top menu)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"GitHub Actions"**
5. The workflow will automatically deploy your site when you push code

---

## Step 5: Configure DNS in GoDaddy

1. **Log in to GoDaddy**
   - Go to [godaddy.com](https://www.godaddy.com)
   - Sign in to your account
   - Go to **"My Products"** → **"Domains"**
   - Find `druzefurniture.com` and click **"DNS"** or **"Manage DNS"**

2. **Add/Update DNS Records:**
   
   You need to add/update the following records:
   
   **For the root domain (druzefurniture.com):**
   - **Type**: `A`
   - **Name**: `@` (or leave blank)
   - **Value**: `185.199.108.153`
   - **TTL**: `600` (or leave default)
   
   - **Type**: `A`
   - **Name**: `@` (or leave blank)
   - **Value**: `185.199.109.153`
   - **TTL**: `600`
   
   - **Type**: `A`
   - **Name**: `@` (or leave blank)
   - **Value**: `185.199.110.153`
   - **TTL**: `600`
   
   - **Type**: `A`
   - **Name**: `@` (or leave blank)
   - **Value**: `185.199.111.153`
   - **TTL**: `600`
   
   **For www subdomain (www.druzefurniture.com):**
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Value**: `YOUR_USERNAME.github.io` (Replace YOUR_USERNAME with your GitHub username)
   - **TTL**: `600` (or leave default)

3. **Remove conflicting records:**
   - Delete any existing `A` records that point to other IPs
   - Delete any `CNAME` records for `@` (root domain can't have CNAME if A records exist)

4. **Save the changes**

**Note**: DNS propagation can take 24-48 hours, but usually works within a few hours.

---

## Step 6: Verify Deployment

1. **Check GitHub Actions:**
   - Go to your repository on GitHub
   - Click on **"Actions"** tab
   - You should see a workflow run called "Build and Deploy"
   - Wait for it to complete (green checkmark)

2. **Check GitHub Pages:**
   - Go to **Settings** → **Pages**
   - You should see: "Your site is live at https://YOUR_USERNAME.github.io"

3. **Test your domain:**
   - After DNS propagates (wait a few hours), visit:
     - `https://druzefurniture.com`
     - `https://www.druzefurniture.com`

---

## Step 7: Enable HTTPS (Automatic)

GitHub Pages automatically provides HTTPS for custom domains. Once DNS is configured correctly:
1. Go to **Settings** → **Pages**
2. Under **"Custom domain"**, you should see `druzefurniture.com`
3. Check **"Enforce HTTPS"** (this option appears after DNS is configured)

---

## Troubleshooting

### Site not loading after deployment
- Wait for DNS propagation (can take up to 48 hours)
- Check DNS records in GoDaddy are correct
- Verify GitHub Actions workflow completed successfully

### 404 errors on routes
- Make sure the `CNAME` file exists in the `public` folder
- Verify `.nojekyll` file exists in the repository root

### DNS issues
- Use [whatsmydns.net](https://www.whatsmydns.net) to check if DNS has propagated globally
- Verify A records point to GitHub Pages IPs: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

### Build errors
- Check the **Actions** tab for error messages
- Make sure all dependencies are in `package.json`
- Verify `vite.config.ts` is configured correctly

---

## Updating Your Website

Whenever you make changes to your website:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

2. **GitHub Actions will automatically:**
   - Build your website
   - Deploy it to GitHub Pages
   - Update your live site

---

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Actions Documentation: https://docs.github.com/en/actions
- GoDaddy DNS Help: https://www.godaddy.com/help

