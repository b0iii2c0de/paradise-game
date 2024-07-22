export interface Task {
  id: number;
  icon: string;
  title: string;
  description?: string;
  reward: number;
  completed: boolean;
  claimable?: boolean;
}
