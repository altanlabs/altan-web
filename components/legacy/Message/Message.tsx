import { Avatar, Card, Stack, Typography } from '@mui/material';
import AIText from './AIText';

interface MessageProps {
  avatarSrc: string;
  username: string;
  timestamp: string;
  message: string;
  isAI: boolean;
}

const Message: React.FC<MessageProps> = ({ avatarSrc, username, timestamp, message, isAI }) => {
  return (
    <div className="p-4 rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5">
      <Stack direction="row" spacing={1} style={{ alignItems: 'center' }}>
        <Avatar alt={username} src={avatarSrc} />
        <Typography variant="subtitle1">{username}</Typography>
        <Typography variant="caption">{timestamp} · From Earth</Typography>
      </Stack>
      <div className="mt-2 ml-10">
        {isAI ? (
          <AIText description={message} />
        ) : (
          <Typography>{message}</Typography>
        )}
      </div>
    </div>
  );
};

export default Message;
