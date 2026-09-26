# DTEMS - Refactored Architecture

## Digital Technical Education Management System

A modular, scalable React application with clean architecture separation.

### Project Structure

```
src/
├── styles/          # Global CSS: reset, variables, global
├── utils/           # Utility functions: email, phone validation
├── context/         # React context: AppContext
├── services/        # API services: apiClient, authService
├── validation/      # Validation logic: forms, passwords
├── hooks/           # Custom React hooks (Coming next)
├── components/      # Reusable UI components (Coming next)
├── pages/           # Page components (Coming next)
└── i18n/            # Internationalization (Coming next)
```

### Key Principles

✅ **Separation of Concerns**: Each module has a single responsibility
✅ **Reusable Components**: UI components are modular and independent
✅ **Isolated Logic**: Business logic is in hooks and services
✅ **Centralized Validation**: All validation in dedicated files
✅ **API Layer**: Services handle all external API calls
✅ **CSS Organization**: Each component has its own stylesheet
✅ **No Inline Styles**: All styling in CSS files
✅ **Language Support**: Full i18n setup with translations

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Features (Planned)

- ✅ Style system with CSS variables
- ✅ Utility functions
- ✅ API service layer
- ✅ Validation utilities
- 🔄 Reusable components
- 🔄 Page components
- 🔄 Custom hooks
- 🔄 Internationalization

### Coming Next

- Reusable components (Button, TextInput, PasswordInput, etc.)
- Page components (Login, Registration, ForgotPassword, Home)
- Custom hooks (useLogin, useRegistration, useForgotPassword)
- Full i18n translations
- Complete component library

---

**Status**: Foundation Complete ✅ | Components: In Progress 🔄
