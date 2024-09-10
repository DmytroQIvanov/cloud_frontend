export type NotificationType = "default" | "red" | "green" | "blue" | "yellow";
export interface INotification {
  message: string;
  id: number;
  type: NotificationType;
  active: boolean;
}
export interface onCreateNotificationDTO {
  message: string;
  type: NotificationType;
}

// export interface onCreateNotificationDTO{
//
// }
