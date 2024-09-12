export interface IWrapperProp {
  header?: boolean;
  bottom?: boolean;
  metaData?: { title?: string };
  children: React.ReactNode;
  fileInput?: boolean;
  //     {
  //   onCreateNotification: (
  //     onCreateNotification: onCreateNotificationDTO,
  //   ) => void;
  // }) => React.ReactNode | null;
}
