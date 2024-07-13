import { forwardRef } from 'react';
import { useTab, useMultiStyleConfig, Button, Box } from '@chakra-ui/react';

const CustomTab = forwardRef((props, ref) => {
  // 1. Reuse the `useTab` hook
  const tabProps = useTab({ ...props, ref });
  const isSelected = !!tabProps['aria-selected'];

  // 2. Hook into the Tabs `size`, `variant`, props
  const styles = useMultiStyleConfig('Tabs', tabProps);

  // 3. Define custom styles for the active state
  const activeStyles = {
    borderRadius: '8px', // Adjust the value for rounded square effect
    bg: '#77291B', // Background color when active
    color: 'white',
    fontWeight: 'bold' // Text color when active
  };

  const inActiveStyles = {
    color: 'white',
  };

  return (
    <Button
      __css={styles.tab}
      {...tabProps}
      {...(isSelected ? activeStyles : inActiveStyles)} // Apply active styles conditionally
    >
      {tabProps.children}
    </Button>
  );
});

export default CustomTab;