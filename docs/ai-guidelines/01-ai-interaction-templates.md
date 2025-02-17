# AI Interaction Templates

## 1. Code Generation Templates

### 1.1 Component Template
```typescript
/**
 * [Component Name] Component
 * 
 * [Brief description of the component's purpose]
 * 
 * @example
 * ```tsx
 * <ComponentName prop1="value" prop2={value} />
 * ```
 */
interface ComponentNameProps {
  /** Description of prop1 */
  prop1: string;
  /** Description of prop2 */
  prop2: number;
  /** Optional prop with default value */
  prop3?: boolean;
}

export const ComponentName: React.FC<ComponentNameProps> = ({
  prop1,
  prop2,
  prop3 = false,
}) => {
  // Component logic here
  return (
    // JSX here
  );
};

// Component test file
describe('ComponentName', () => {
  it('should render correctly', () => {
    // Test implementation
  });
});
```

### 1.2 Hook Template
```typescript
/**
 * [Hook Name]
 * 
 * [Brief description of the hook's purpose]
 * 
 * @example
 * ```tsx
 * const result = useHookName(param1, param2);
 * ```
 */
interface HookNameParams {
  /** Description of param1 */
  param1: string;
  /** Description of param2 */
  param2: number;
}

interface HookNameResult {
  /** Description of data */
  data: any;
  /** Description of loading state */
  loading: boolean;
  /** Description of error state */
  error: Error | null;
}

export const useHookName = ({
  param1,
  param2,
}: HookNameParams): HookNameResult => {
  // Hook logic here
};

// Hook test file
describe('useHookName', () => {
  it('should handle basic functionality', () => {
    // Test implementation
  });
});
```

### 1.3 Service Template
```typescript
/**
 * [Service Name] Service
 * 
 * [Brief description of the service's purpose]
 */
interface ServiceConfig {
  /** Description of config1 */
  config1: string;
  /** Description of config2 */
  config2: number;
}

export class ServiceName {
  private config: ServiceConfig;

  constructor(config: ServiceConfig) {
    this.config = config;
  }

  /**
   * [Method description]
   * @param param1 - Description of param1
   * @returns Description of return value
   */
  public async methodName(param1: string): Promise<Result> {
    // Method implementation
  }
}

// Service test file
describe('ServiceName', () => {
  it('should initialize correctly', () => {
    // Test implementation
  });
});
```

## 2. Documentation Templates

### 2.1 Technical Documentation
```markdown
# [Feature/Component Name]

## Overview
[Brief description of the feature/component]

## Technical Details
- Architecture: [Description]
- Dependencies: [List]
- Performance Considerations: [Details]

## Implementation
```typescript
// Code example
```

## Usage
```typescript
// Usage example
```

## Testing
- Unit Tests: [Description]
- Integration Tests: [Description]
- E2E Tests: [Description]

## Security Considerations
- [Security point 1]
- [Security point 2]

## Performance Metrics
- [Metric 1]: [Target]
- [Metric 2]: [Target]
```

### 2.2 API Documentation
```markdown
# [API Name]

## Endpoint: [Method] /path/to/endpoint

### Description
[Brief description of the endpoint]

### Request
```typescript
interface Request {
  param1: string;  // Description
  param2: number;  // Description
}
```

### Response
```typescript
interface Response {
  data: any;       // Description
  status: string;  // Description
}
```

### Error Responses
- `400`: [Description]
- `401`: [Description]
- `403`: [Description]
- `500`: [Description]

### Example
```json
// Request/Response example
```
```

## 3. Test Templates

### 3.1 Unit Test Template
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('[Component/Function Name]', () => {
  beforeEach(() => {
    // Setup
  });

  afterEach(() => {
    // Cleanup
  });

  it('should [expected behavior]', () => {
    // Arrange
    // Act
    // Assert
  });

  it('should handle errors', () => {
    // Error test implementation
  });

  it('should handle edge cases', () => {
    // Edge case test implementation
  });
});
```

### 3.2 Integration Test Template
```typescript
describe('[Feature Name] Integration', () => {
  beforeAll(() => {
    // Global setup
  });

  afterAll(() => {
    // Global cleanup
  });

  describe('when [condition]', () => {
    it('should [expected behavior]', async () => {
      // Test implementation
    });
  });

  describe('error handling', () => {
    it('should handle [error condition]', async () => {
      // Error test implementation
    });
  });
});
```

## 4. Smart Contract Templates

### 4.1 Solidity Contract Template
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/...";

/**
 * @title [Contract Name]
 * @dev [Contract description]
 */
contract ContractName is [Inherited Contracts] {
    // Events
    event EventName(
        address indexed sender,
        uint256 value
    );

    // State variables
    mapping(address => uint256) private _balances;

    // Constructor
    constructor(address _param1) {
        // Constructor logic
    }

    // External functions
    function externalFunction() external returns (uint256) {
        // Function logic
    }

    // Public functions
    function publicFunction() public view returns (uint256) {
        // Function logic
    }

    // Internal functions
    function _internalFunction() internal {
        // Function logic
    }

    // Private functions
    function _privateFunction() private {
        // Function logic
    }
}
```

### 4.2 Solana Program Template
```rust
use anchor_lang::prelude::*;

declare_id!("[Program ID]");

#[program]
pub mod program_name {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        // Initialization logic
        Ok(())
    }

    pub fn process_instruction(
        ctx: Context<ProcessInstruction>,
        data: u64
    ) -> Result<()> {
        // Instruction logic
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(
        init,
        payer = user,
        space = 8 + size_of::<AccountState>()
    )]
    pub state: Account<'info, AccountState>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct AccountState {
    pub data: u64,
}
```

## 5. Error Handling Templates

### 5.1 Frontend Error Template
```typescript
interface ErrorState {
  message: string;
  code: string;
  severity: 'error' | 'warning' | 'info';
  retry?: () => Promise<void>;
}

const ErrorComponent: React.FC<ErrorState> = ({
  message,
  code,
  severity,
  retry,
}) => {
  return (
    // Error UI implementation
  );
};

const ErrorBoundary: React.FC = ({ children }) => {
  // Error boundary implementation
};
```

### 5.2 Backend Error Template
```typescript
class CustomError extends Error {
  constructor(
    message: string,
    public code: string,
    public status: number,
    public details?: any
  ) {
    super(message);
    this.name = 'CustomError';
  }
}

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Error handling logic
};
```

## 6. State Management Templates

### 6.1 Zustand Store Template
```typescript
interface StoreState {
  data: any;
  loading: boolean;
  error: Error | null;
  actions: {
    fetchData: () => Promise<void>;
    updateData: (data: any) => void;
    resetStore: () => void;
  };
}

const useStore = create<StoreState>((set, get) => ({
  data: null,
  loading: false,
  error: null,
  actions: {
    fetchData: async () => {
      // Implementation
    },
    updateData: (data) => set({ data }),
    resetStore: () => set({ data: null, loading: false, error: null }),
  },
}));
```

### 6.2 React Query Template
```typescript
const useQueryTemplate = (params: QueryParams) => {
  return useQuery({
    queryKey: ['key', params],
    queryFn: async () => {
      // Implementation
    },
    options: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      retry: 3,
      onError: (error) => {
        // Error handling
      },
    },
  });
};
``` 