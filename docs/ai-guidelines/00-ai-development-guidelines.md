# AI Development Guidelines

## 1. Project Context

### 1.1 Required Reading
Before suggesting any changes or generating code, AI agents must be aware of:
- White paper content and vision
- Technical design documentation
- Platform design documentation
- Current project status
- Existing codebase structure

### 1.2 Project State Awareness
AI must always:
- Check current project status in `/docs/project-tracker`
- Review relevant technical docs in `/docs/technical-design`
- Verify platform requirements in `/docs/platform-design`
- Understand current sprint goals and priorities

## 2. Development Standards

### 2.1 Code Style
- TypeScript for all JavaScript code
- Strict type checking enabled
- ESLint with recommended rules
- Prettier for code formatting
- Function and variable naming in camelCase
- Interface and type names in PascalCase
- No `any` types unless absolutely necessary

### 2.2 Architecture Patterns
- Clean architecture principles
- Domain-driven design where applicable
- Separation of concerns
- SOLID principles
- Immutable state management
- Event-driven architecture
- Microservices communication patterns

### 2.3 Testing Requirements
- Jest for unit testing
- React Testing Library for components
- Cypress for E2E testing
- Test coverage requirements:
  - Unit tests: 80%
  - Integration tests: 70%
  - E2E tests: Key user journeys

## 3. AI Interaction Guidelines

### 3.1 Code Generation Rules
1. **Documentation First**
   - Review relevant documentation before generating code
   - Ensure alignment with architecture decisions
   - Verify compliance with design patterns

2. **Incremental Changes**
   - Generate code in manageable chunks
   - Allow for review between generations
   - Maintain context between iterations

3. **Quality Standards**
   - Include type definitions
   - Add JSDoc comments
   - Include unit tests
   - Follow project structure

### 3.2 Review Process
1. **Self-Review**
   - Check against style guidelines
   - Verify type safety
   - Ensure test coverage
   - Validate documentation

2. **Documentation Updates**
   - Update relevant documentation
   - Add inline comments
   - Update type definitions
   - Update test documentation

## 4. Technology Stack

### 4.1 Frontend
- Next.js 14+
- TypeScript
- TailwindCSS
- ethers.js
- @solana/web3.js
- React Query
- Zustand
- Jest + RTL

### 4.2 Backend
- Node.js
- TypeScript
- GraphQL (Apollo)
- PostgreSQL
- Redis
- MongoDB

### 4.3 Blockchain
- Solidity (Ethereum)
- Rust (Solana)
- Hardhat
- Anchor

## 5. Security Requirements

### 5.1 Code Security
- No hardcoded secrets
- Input validation
- Output sanitization
- Error handling
- Rate limiting
- CORS policies

### 5.2 Smart Contract Security
- Formal verification
- Audit readiness
- Gas optimization
- Upgrade mechanisms
- Emergency controls

## 6. Performance Guidelines

### 6.1 Frontend Performance
- Lighthouse scores > 90
- First paint < 1.5s
- TTI < 3.5s
- Bundle size optimization
- Code splitting
- Image optimization

### 6.2 Backend Performance
- API response < 100ms
- Query optimization
- Caching strategy
- Connection pooling
- Rate limiting

## 7. Documentation Requirements

### 7.1 Code Documentation
- Clear function descriptions
- Type definitions
- Usage examples
- Edge cases
- Error scenarios

### 7.2 Architecture Documentation
- Component diagrams
- Data flow
- API specifications
- State management
- Error handling

## 8. Project Structure

### 8.1 Directory Organization
```
src/
├── app/             # Next.js app directory
├── components/      # React components
├── contracts/       # Smart contracts
├── hooks/          # Custom React hooks
├── lib/            # Shared utilities
├── services/       # External services
├── styles/         # Global styles
├── types/          # TypeScript types
└── utils/          # Helper functions
```

### 8.2 File Naming
- Components: PascalCase
- Utilities: camelCase
- Tests: `.test.ts` or `.spec.ts`
- Types: `.types.ts`
- Styles: `.styles.ts`

## 9. Commit Guidelines

### 9.1 Commit Messages
- Conventional commits format
- Clear descriptions
- Reference issues/tasks
- Include breaking changes
- Document migrations

### 9.2 Code Review
- Self-review checklist
- Documentation updates
- Test coverage
- Performance impact
- Security considerations

## 10. Error Handling

### 10.1 Frontend Errors
- User-friendly messages
- Error boundaries
- Fallback UI
- Retry mechanisms
- Error tracking

### 10.2 Backend Errors
- Structured error responses
- Logging
- Monitoring
- Alert thresholds
- Recovery procedures

## 11. State Management

### 11.1 Frontend State
- Zustand for global state
- React Query for server state
- Local state when appropriate
- Immutable updates
- Performance optimization

### 11.2 Backend State
- Database transactions
- Cache consistency
- Event sourcing
- State machines
- Conflict resolution

## 12. Testing Strategy

### 12.1 Test Types
- Unit tests
- Integration tests
- E2E tests
- Contract tests
- Performance tests

### 12.2 Test Requirements
- Test coverage thresholds
- Mocking guidelines
- Test data management
- CI/CD integration
- Performance benchmarks

## 13. Accessibility

### 13.1 Requirements
- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

### 13.2 Implementation
- Color contrast
- Focus management
- Error announcements
- Alternative text
- Skip links

## 14. Internationalization

### 14.1 Setup
- Next.js i18n
- RTL support
- Date/time formatting
- Number formatting
- Currency handling

### 14.2 Content
- Translation keys
- Placeholder handling
- Dynamic content
- Fallback texts
- Cultural considerations 