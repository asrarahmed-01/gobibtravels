# gobib Travels

A travel booking marketing site built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Redux Toolkit + Redux-Saga for state management, and Firebase (Auth/Firestore/Storage) as the current data layer.

## Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State**: Redux Toolkit + Redux-Saga (one slice/saga pair per domain: home, tours, attractions, blogs)
- **Data**: Firebase Firestore (client SDK reads directly from Firestore collections: `HomeCard`, `tours`, `attractions`, `reviews`)

## Getting started

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and fill in your Firebase project credentials before running.

## Project structure

```
src/app/            # Pages (App Router) + shared Components/
src/lib/slices/      # Redux Toolkit slices
src/lib/sagas/        # Redux-Saga workers (Firestore reads)
src/lib/firebase.ts    # Firebase app/auth/firestore/storage init
firestore.rules       # Firestore security rules
functions/             # Firebase Cloud Functions (scaffolded, not yet implemented)
```

## Notes for the next phase (backend)
- Contact form and newsletter signup currently write directly to Firestore (`contactMessages`, `newsletterSubscribers` collections) from the client. These are read-restricted in `firestore.rules` — only a trusted backend/admin context should read them until a proper backend exists.
- No booking, payments, or auth flows exist yet — see project discussion for the planned backend API and database design.
- `firestore.rules` currently grants public write access to content collections only for users with a custom `admin` auth claim. Set that claim via Firebase Admin SDK once an admin flow exists.
