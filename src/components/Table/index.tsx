// This file defines the Table component for the AscendUCore Design System.
// It provides a structured way to display tabular data, with styles
// derived from the theme for consistency and readability.

import React from 'react';
import styled from '@emotion/styled';
import type { SerializedStyles } from '@emotion/react';

// Define the props interface for the Table component
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  /**
   * The content to be rendered inside the table. Typically `<thead>` and `<tbody>` elements.
   */
  children: React.ReactNode;
  /**
   * If true, applies alternating background colors to table rows for better readability.
   * @default false
   */
  striped?: boolean;
  /**
   * If true, applies borders to all cells.
   * @default false
   */
  bordered?: boolean;
  /**
   * Optional Emotion `css` prop for additional custom styles.
   */
  css?: SerializedStyles;
}

// Styled component for the base Table element
const StyledTable = styled.table<Pick<TableProps, 'striped' | 'bordered'>>`
  // Base styles for the table
  width: 100%;
  border-collapse: collapse; // Collapse borders for a clean look
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-size: ${(props) => props.theme.typography.bodySmall.fontSize};
  line-height: ${(props) => props.theme.typography.bodySmall.lineHeight};
  color: ${(props) => props.theme.colors.text.default};
  background-color: ${(props) => props.theme.colors.background.surface}; // Table background

  // Header row styling
  thead {
    th {
      text-align: left;
      padding: ${(props) => props.theme.spacing.md};
      background-color: ${(props) => props.theme.colors.neutral['90']}; // Header background color
      color: ${(props) => props.theme.colors.text.default}; // Light text on dark header
      font-weight: ${(props) => props.theme.typography.button.fontWeight}; // Bolder font for headers
      border-bottom: 1px solid ${(props) => props.theme.colors.border.strong};
    }
  }

  // Body row and cell styling
  tbody {
    tr {
      border-bottom: 1px solid ${(props) => props.theme.colors.border.default}; // Separator between rows
      &:last-child {
        border-bottom: none; // No border after the last row
      }
    }

    td {
      padding: ${(props) => props.theme.spacing.md};
    }
  }

  // Striped rows variant
  ${(props) =>
    props.striped &&
    `
    tbody tr:nth-of-type(odd) {
      background-color: ${props.theme.colors.neutral['95']}; // Lighter background for odd rows
    }
  `}

  // Bordered cells variant
  ${(props) =>
    props.bordered &&
    `
    th, td {
      border: 1px solid ${props.theme.colors.border.default}; // All cells have borders
    }
    thead th {
      border-top: 1px solid ${props.theme.colors.border.default};
    }
  `}
`;

/**
 * The **Table** component provides a structured and visually consistent way to display
 * tabular data within the AscendUCore Design System. It offers clear presentation of
 * rows and columns, with options for visual enhancements like striped rows and cell borders.
 * This component is built to ensure readability and maintain a cohesive design language
 * across all data-driven interfaces.
 *
 * ```typescript
 * import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from "@activityeducation/component-library";
 * ```
 *
 * ## Justification
 * Tables are fundamental for organizing and presenting complex datasets in a digestible
 * format. A dedicated `Table` component ensures that all tabular data adheres to the
 * platform's design guidelines, providing a uniform user experience. It abstracts away
 * repetitive styling, allowing developers to focus on data logic rather than presentation.
 * The inclusion of `striped` and `bordered` variants offers flexibility to adapt the
 * table's visual density to different contexts, improving readability for various data types.
 * Wrapping the table in a responsive container also ensures usability across devices.
 *
 * ## Acceptance Criteria
 * - **GIVEN** the `Table` component is rendered, **THEN** its content should be
 * displayed in a standard tabular format with clear rows and columns.
 * - **GIVEN** the `striped` prop is true, **THEN** alternating rows should have
 * a distinct background color for improved readability.
 * - **GIVEN** the `bordered` prop is true, **THEN** all cells (`<th>` and `<td>`)
 * should have visible borders.
 * - **GIVEN** a long table content, **THEN** the table should be horizontally scrollable
 * within its container to prevent overflow on smaller screens.
 * - **GIVEN** the table has a header, **THEN** header cells should be clearly
 * distinguishable (e.g., with a different background and bold text).
 *
 * ## Example & Props
 */
export const Table: React.FC<TableProps> = ({
  children,
  striped = false,
  bordered = false,
  ...props
}) => {
  return (
    // It's good practice to wrap the table in a div for responsive overflow handling
    <div style={{ overflowX: 'auto', borderRadius: theme.borderRadius.md, boxShadow: theme.shadows.sm }}>
      <StyledTable striped={striped} bordered={bordered} {...props}>
        {children}
      </StyledTable>
    </div>
  );
};

// Helper components for table structure (optional, but good for consistency)
interface TableHeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}
interface TableHeaderCellProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}
interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const TableHead: React.FC<TableHeadProps> = ({ children, ...props }) => <thead {...props}>{children}</thead>;
export const TableBody: React.FC<TableBodyProps> = ({ children, ...props }) => <tbody {...props}>{children}</tbody>;
export const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => <tr {...props}>{children}</tr>;
export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ children, ...props }) => <th {...props}>{children}</th>;
export const TableCell: React.FC<TableCellProps> = ({ children, ...props }) => <td {...props}>{children}</td>;

// Re-import theme for use in helper components if needed, or ensure it's in scope
import { theme } from '../../theme';
