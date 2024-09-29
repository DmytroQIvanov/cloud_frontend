export interface IWrapperProp {
  header?: boolean;
  bottom?: boolean;
  metaData?: { title?: string };
  children: React.ReactNode;
  fileInput?: boolean;
  ip?: any;
  agent?: any;
  forwarded?: any;
  //     {
  //   onCreateNotification: (
  //     onCreateNotification: onCreateNotificationDTO,
  //   ) => void;
  // }) => React.ReactNode | null;
}
