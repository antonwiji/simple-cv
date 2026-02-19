export interface MultiInputFieldProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>> {
    onRemoveField?: () => void;
    panelClosed?: boolean;
}