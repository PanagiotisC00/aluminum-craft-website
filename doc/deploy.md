# 🚀 Deployment Guide: GitHub to Vercel

This guide walks you through deploying your aluminum fabricator website from GitHub to Vercel for free hosting.

---

## 📋 Prerequisites

✅ **Code pushed to GitHub repository**  
✅ **GitHub account active**  
✅ **Website working locally**

---

## 🌐 Deploy to Vercel (FREE)

### **Why Vercel?**
- ✅ **Made for Next.js** (perfect compatibility)
- ✅ **Completely FREE** for personal/small projects
- ✅ **Lightning fast** global CDN
- ✅ **Custom domain** support (free)
- ✅ **Automatic HTTPS** security
- ✅ **Deploy in 2-3 minutes**

---

## 🚀 **Step-by-Step Deployment**

### **Step 1: Sign Up to Vercel**
1. **Visit:** [vercel.com](https://vercel.com)
2. **Click:** "Sign Up" (top-right corner)
3. **Choose:** "Continue with GitHub"
4. **Authorize** Vercel to access your GitHub repositories

### **Step 2: Import Your Project**
1. **After login, click:** "New Project" or "Add New..."
2. **You'll see:** List of your GitHub repositories
3. **Find:** Your `aluminum-fabricator-cyprus` repository (or whatever you named it)
4. **Click:** "Import" button next to your repository

### **Step 3: Configure Project (Auto-Detected)**
Vercel automatically detects your Next.js project:

| Setting | Value | Status |
|---------|-------|--------|
| **Framework Preset** | Next.js | ✅ Auto-detected |
| **Build Command** | `pnpm run build` | ✅ Auto-filled |
| **Output Directory** | `.next` | ✅ Auto-filled |
| **Install Command** | `corepack pnpm install --frozen-lockfile` or auto-detected from `pnpm-lock.yaml` | ✅ Auto-filled |

**⚠️ Important:** Keep the project on pnpm through Corepack. If Vercel has an old npm install command override, remove it so the `pnpm-lock.yaml` is auto-detected or set it to `corepack pnpm install --frozen-lockfile`.

### **Step 4: Deploy**
1. **Click:** "Deploy" button
2. **Wait 2-3 minutes** for deployment to complete
3. **Watch the progress:** Vercel shows real-time build logs

### **Step 5: Get Your Live URL**
Once deployed successfully, you'll get a live URL like:
```
https://aluminum-fabricator-cyprus.vercel.app
```
or
```
https://aluminum-fabricator-cyprus-username.vercel.app
```

---

## ✅ **Deployment Complete!**

### **What You Now Have:**
- 🌐 **Live website** accessible worldwide
- 🔒 **HTTPS secure** connection
- ⚡ **Fast loading** via global CDN
- 📱 **Mobile responsive** on all devices
- 🌍 **Bilingual** (English & Greek)
- 🎯 **Professional URL** to share with clients

### **Test Your Live Website:**
1. **Click your live URL** in Vercel dashboard
2. **Test on desktop** browser
3. **Test on mobile** browser
4. **Try language switching** (EN ↔ Greek)
5. **Test contact form** (make sure it works)
6. **Check all sections** scroll smoothly

---

## 🔄 **Automatic Updates**

### **Future Changes:**
Every time you push code to GitHub:
- ✅ Vercel **automatically rebuilds**
- ✅ **Deploys new version** within minutes
- ✅ **Zero downtime** updates

### **How to Update Website:**
1. **Make changes** locally
2. **Test locally:** `corepack pnpm run dev`
3. **Push to GitHub:** `git add . && git commit -m "Update" && git push`
4. **Vercel auto-deploys** the changes

---

## 🎨 **Optional: Custom Domain**

### **Add Your Own Domain:**
1. **Buy domain** (e.g., `www.aluminumcraftcyprus.com`)
2. **In Vercel dashboard:** Go to "Domains"
3. **Add your domain**
4. **Update DNS records** (Vercel provides instructions)
5. **Free SSL certificate** automatically added

---

## 🗑️ **How to Take Website Down**

### **Method 1: Pause Deployment**
1. **Go to:** [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Click:** Your project name
3. **Go to:** "Settings" tab
4. **Scroll down:** Find "Pause Deployments"
5. **Click:** "Pause" button

### **Method 2: Delete Project (Permanent)**
1. **Go to:** [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Click:** Your project name
3. **Go to:** "Settings" tab
4. **Scroll to bottom:** Find "Delete Project"
5. **Type project name** to confirm
6. **Click:** "Delete Project"

⚠️ **Warning:** Deleting is permanent! Your URL will stop working immediately.

### **Method 3: Make Repository Private**
1. **Go to:** Your GitHub repository
2. **Click:** "Settings" tab
3. **Scroll down:** Find "Danger Zone"
4. **Click:** "Change repository visibility"
5. **Select:** "Make private"
6. **Confirm:** This breaks the Vercel connection

### **Method 4: Remove from GitHub (Nuclear Option)**
1. **Go to:** Your GitHub repository
2. **Click:** "Settings" tab
3. **Scroll to bottom:** "Delete this repository"
4. **Type repository name** to confirm
5. **Click:** "Delete repository"

⚠️ **Warning:** This deletes all your code permanently!

---

## 🆘 **Troubleshooting**

### **Common Issues:**

#### **Build Failed:**
- ✅ Check build logs in Vercel dashboard
- ✅ Ensure `corepack pnpm run build` works locally
- ✅ Check for missing dependencies

#### **Images Not Loading:**
- ✅ Ensure images are in `public/images/` folder
- ✅ Check image file names match code
- ✅ Verify image formats (jpg, png, webp)

#### **Contact Form Not Working:**
- ✅ Set `NEXT_PUBLIC_FORMSPREE_ID` in Vercel to the production Formspree form ID
- ✅ Use a local/test Formspree ID when testing from localhost

#### **Language Switching Issues:**
- ✅ Check translation files in `public/locales/`
- ✅ Verify all translations are complete

---

## 📞 **Getting Help**

### **Vercel Support:**
- **Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Discord:** [vercel.com/discord](https://vercel.com/discord)
- **GitHub Issues:** For Next.js specific problems

### **Your Live Website:**
Once deployed, your aluminum fabricator website will be live at:
```
https://YOUR-PROJECT-NAME.vercel.app
```

**Perfect for sharing with clients, testing on mobile devices, and showcasing your professional aluminum fabrication services!**

---

## 🎯 **Summary**

✅ **Free hosting** for aluminum fabricator website  
✅ **Professional appearance** with custom domain option  
✅ **Automatic updates** when you push code changes  
✅ **Global fast loading** via CDN  
✅ **Mobile responsive** design  
✅ **Bilingual support** (English & Greek)  
✅ **Easy to remove** if needed  

**Your professional aluminum fabrication website is now live and ready for clients!** 🎉 
