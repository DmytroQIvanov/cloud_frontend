export interface IWrapperProp {
  header?: boolean;
  bottom?: boolean;
  metaData?: { title?: string };
  children: React.ReactNode;
  //     {
  //   onCreateNotification: (
  //     onCreateNotification: onCreateNotificationDTO,
  //   ) => void;
  // }) => React.ReactNode | null;
}
