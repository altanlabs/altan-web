"use client";
import { Stack, Chip, Typography, Card } from '@mui/material';
import { Icon } from '@iconify/react';

const Webhook = ({ webhook }) => {
    const appLink = webhook.name.toLowerCase().replace(/\s+/g, '-');
    return (
        <a href={appLink}>
            <div className="mt-4 bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative p-4">
                <div className="flex items-center space-x-3 mb-3">
                    <div className="relative">
                        <Icon width={32} icon="material-symbols:webhook" style={{color: '#9ca3af'}}/>
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
                        {webhook.name.replace(/\s*\[[^\]]+\]/, '').trim()} Webhook
                    </Typography>
                </div>
                <div className="grow">
                    <div className="text-sm text-slate-400">{webhook.description}</div>
                </div>
            </div>
        </a>
    )
}

export default Webhook;