"use client";
import { Stack, Chip, Typography, Card } from '@mui/material';
import { useParams } from 'next/navigation';

const Action = ({ action }) => {
  const params = useParams<{ appName: string }>();
  return (
    <div className="bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative p-4">
      <div className="flex items-center space-x-3 mb-3">
        <div className="relative">
          <Chip color="primary" label={action.method} size="small" />
        </div>

        <Typography 
          variant="h6" 
          className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0 truncate"
          sx={{ 
            maxWidth: '80%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {action.name.replace(/\s*\[[^\]]+\]/, '').trim()}
        </Typography>
      </div>
      <div className="grow">
        <div className="text-sm text-slate-400">{action.description}</div>
      </div>
    </div>
  )
}

export default Action;