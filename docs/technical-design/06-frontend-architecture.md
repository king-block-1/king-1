# Frontend Architecture

## 1. Technical Stack

### 1.1 Core Technologies
- Next.js 14+ (App Router)
- TypeScript
- TailwindCSS
- ethers.js (Ethereum)
- @solana/web3.js (Solana)
- React Query
- Zustand
- Jest + RTL

### 1.2 Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- First Input Delay: < 100ms
- Lighthouse Score: > 90

## 2. Application Structure

### 2.1 Directory Organization
```
src/
├── app/             # Next.js app router pages
├── components/      # React components
│   ├── ui/         # Core UI components
│   ├── blockchain/ # Web3 components
│   ├── layout/     # Layout components
│   └── shared/     # Shared components
├── contracts/      # Contract ABIs and addresses
├── hooks/         # Custom React hooks
├── lib/           # Core libraries
├── services/      # External services
├── styles/        # Global styles
├── types/         # TypeScript types
└── utils/         # Helper functions
```

### 2.2 Component Architecture
```typescript
// Component Template
interface ComponentProps {
  /** Component props with JSDoc comments */
  prop: Type;
}

export const Component: React.FC<ComponentProps> = ({ prop }) => {
  // 1. Hooks
  // 2. State
  // 3. Derived values
  // 4. Effects
  // 5. Event handlers
  // 6. Render
};
```

## 3. State Management

### 3.1 Global State (Zustand)
```typescript
interface GlobalState {
  // Wallet state
  wallet: {
    address: string | null;
    chain: Chain;
    status: ConnectionStatus;
  };
  
  // User state
  user: {
    profile: UserProfile | null;
    preferences: UserPreferences;
  };
  
  // Application state
  app: {
    theme: Theme;
    notifications: Notification[];
  };
}
```

### 3.2 Server State (React Query)
```typescript
// Query keys
export const queryKeys = {
  user: {
    profile: ['user', 'profile'],
    tokens: ['user', 'tokens'],
  },
  creator: {
    profile: (id: string) => ['creator', id],
    tokens: (id: string) => ['creator', id, 'tokens'],
  },
};

// Query hooks
export const useUserProfile = () => {
  return useQuery({
    queryKey: queryKeys.user.profile,
    queryFn: fetchUserProfile,
  });
};
```

## 4. Core Components

### 4.1 Layout Components
```typescript
// MainLayout.tsx
export const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
```

### 4.2 Blockchain Components
```typescript
// WalletConnect.tsx
export const WalletConnect: React.FC = () => {
  const { connect, disconnect, status } = useWallet();
  
  return (
    <Button
      onClick={status === 'connected' ? disconnect : connect}
      variant={status === 'connected' ? 'secondary' : 'primary'}
    >
      {status === 'connected' ? 'Disconnect' : 'Connect Wallet'}
    </Button>
  );
};
```

## 5. Design System

### 5.1 Theme Configuration
```typescript
// theme.config.ts
export const theme = {
  colors: {
    primary: {
      DEFAULT: '#6366f1',
      dark: '#4f46e5',
    },
    secondary: {
      DEFAULT: '#ec4899',
      dark: '#db2777',
    },
    background: {
      light: '#ffffff',
      dark: '#0a0a0a',
    },
  },
  typography: {
    fonts: {
      sans: 'Outfit, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
    },
    lineHeight: {
      tight: '1',
      snug: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
};
```

### 5.2 Component Library
```typescript
// Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size }),
        loading && 'opacity-50 cursor-not-allowed'
      )}
      disabled={loading}
      {...props}
    >
      {loading ? <Spinner className="mr-2" /> : null}
      {children}
    </button>
  );
};
```

## 6. Performance Optimization

### 6.1 Code Splitting
- Dynamic imports for routes
- Lazy loading for heavy components
- Route-based code splitting
- Component-level code splitting

### 6.2 Asset Optimization
- Image optimization with next/image
- Font optimization with next/font
- Static asset caching
- CDN integration

### 6.3 State Management
- Selective re-rendering
- Memoization
- Virtualization for long lists
- Debouncing/throttling

## 7. Testing Strategy

### 7.1 Unit Tests
```typescript
// Button.test.tsx
describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles loading state', () => {
    render(<Button loading>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### 7.2 Integration Tests
```typescript
// WalletConnect.test.tsx
describe('WalletConnect', () => {
  it('connects wallet', async () => {
    render(<WalletConnect />);
    await userEvent.click(screen.getByText('Connect Wallet'));
    expect(await screen.findByText('Disconnect')).toBeInTheDocument();
  });
});
```

## 8. Security Measures

### 8.1 Web3 Security
- Wallet signature verification
- Transaction confirmation UI
- Gas estimation and limits
- Network validation
- Smart contract interaction safety

### 8.2 Application Security
- Input validation
- XSS prevention
- CSRF protection
- Secure storage
- Rate limiting

## 9. Accessibility

### 9.1 Standards
- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Screen reader support

### 9.2 Implementation
```typescript
// AccessibleButton.tsx
export const AccessibleButton: React.FC<ButtonProps> = ({
  'aria-label': ariaLabel,
  children,
  ...props
}) => {
  return (
    <button
      role="button"
      aria-label={ariaLabel}
      tabIndex={0}
      {...props}
    >
      {children}
    </button>
  );
};
```

## 10. Internationalization

### 10.1 Setup
```typescript
// i18n.config.ts
export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es', 'ja'],
  defaultNamespace: 'common',
};
```

### 10.2 Usage
```typescript
// Component usage
export const LocalizedComponent: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.description')}</p>
    </div>
  );
};
``` 