# 📬 Contact Form Setup Guide

Ye guide follow karo taaki form se messages tumhare **Email aur WhatsApp** dono par aayein.

---

## ✅ Step 1 — Web3Forms API Key (Email delivery)

1. **https://web3forms.com** par jao
2. Apna email dalo: `b.techchandancs@gmail.com`
3. **"Create Access Key"** click karo
4. Tumhare email par ek access key aayegi
5. **`.env`** file mein replace karo:
   ```
   VITE_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```
6. App restart karo: `npm run dev`

> **Free plan:** 250 submissions/month (portfolio ke liye kaafi hai)

---

## ✅ Step 2 — Cloudflare Turnstile CAPTCHA (Spam block)

1. **https://dash.cloudflare.com** par login karo (free account)
2. Left sidebar mein **Turnstile** click karo
3. **"Add Site"** click karo
4. Settings:
   - Name: `Portfolio Contact Form`
   - Domains add karo:
     - `localhost`
     - `jai-ksprogrammer.github.io` (ya tumhara GitHub Pages domain)
   - Widget type: `Managed`
5. **Site Key** copy karo (Not the Secret Key - wo server side ke liye hai)
6. **`.env`** file update karo:
   ```
   VITE_TURNSTILE_KEY=0x4AAAAAAA...YOUR_ACTUAL_SITE_KEY
   ```

> **Testing mein:** `1x00000000000000000000AA` (test key) ka use karo — exactly wahi `.env` mein already hai

---

## ✅ Step 3 — WhatsApp Notifications (2 options)

### Option A: Direct WhatsApp Link (Already implemented ✅)

- Form mein **"WhatsApp Me"** button hai
- Click karne par WhatsApp Web/App khulega pre-filled message ke saath
- **Koi setup nahi chahiye!**

### Option B: Automatic WhatsApp notification (Zapier/Make.com)

1. **https://zapier.com** par free account banao
2. New Zap: `Webhook → WhatsApp`
3. Web3Forms ke **Webhook URL** feature use karo
   - Web3Forms dashboard → Settings → Webhook → Zapier URL paste karo
4. Zapier mein WhatsApp Business action configure karo

> **Note:** WhatsApp Business API ke liye verified business number chahiye. Zapier integration medium complexity hai.

---

## 🔒 Security Features Implemented

| Feature                   | Status | Details                              |
| ------------------------- | ------ | ------------------------------------ |
| Email format validation   | ✅     | RFC 5322 regex + browser native      |
| Required field validation | ✅     | Client + server (Web3Forms)          |
| Message length limit      | ✅     | Min 20 chars, Max 1000 chars         |
| Honeypot field            | ✅     | Hidden field — bots fill karte hain  |
| Rate limiting (client)    | ✅     | 1 message per 60 seconds per session |
| Rate limiting (server)    | ✅     | Web3Forms handles it server-side     |
| CAPTCHA                   | ✅     | Cloudflare Turnstile                 |
| CORS                      | ✅     | Web3Forms API handles CORS           |
| Spam filtering            | ✅     | Web3Forms built-in spam filter       |
| Character counter         | ✅     | Live counter with red warning        |
| Error messages            | ✅     | Per-field inline validation          |

---

## 🚀 Deploy (GitHub Pages)

Keys `.env` mein locally kaam karti hain. GitHub Pages par deploy karne ke liye:

1. GitHub repo Settings → **Secrets and variables → Actions**
2. Add secrets:
   - `VITE_WEB3FORMS_KEY` = tumhari actual key
   - `VITE_TURNSTILE_KEY` = tumhari actual site key
3. Ya simply build se pehle GitHub Actions workflow mein inject karo

**Ya simplest:** `.env.production` file banao (gitignore mein add mat karo):

```
VITE_WEB3FORMS_KEY=your-actual-key
VITE_TURNSTILE_KEY=your-actual-turnstile-key
```

`npm run build` karo → dist folder deploy karo.

---

## 📧 Email Template (Web3Forms)

Web3Forms automatically email bhejta hai is format mein:

```
From: b.techchandancs@gmail.com
Subject: Portfolio Contact: [subject from form]

Name: [name]
Email: [sender's email]
Message: [message]
```

Web3Forms dashboard par email template customize bhi kar sakte ho.
