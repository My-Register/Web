export default interface AlertType {
   title: string;
   message: string;
   callback?: () => void;
   type: 'warnning' | 'error' | 'info' | 'message';
}
