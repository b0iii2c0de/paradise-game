export interface Task {
  id: number;
  icon: string;
  title: string;
  description?: string;
  reward: number;
  completed: boolean;
  claimable?: boolean;
  lastClaimTime?: number | null
  isActive?: boolean;

  // поля с типами для модалок
  modalTitle?: string;
  modalDescription?: string;
  modalType?: "subscribe" | "visit" | "join" | "screenshot" | "retweet" | "watch"; // любые другие модалки
  actionButtonLabel?: string;
  verificationStatus?: "pending" | "verified" | "rejected";
}
