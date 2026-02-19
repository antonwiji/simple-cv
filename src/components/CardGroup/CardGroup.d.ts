export type TCardGroup = {
    children: React.ReactNode;
    title?: string;
    onRemoveField?: () => void;
    panelClosed?: boolean;
}