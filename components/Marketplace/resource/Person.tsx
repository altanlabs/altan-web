import { Grid, Card, CardContent, Typography } from '@mui/material';


export default function Person({ agent }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5">{agent.name}</Typography>
                <Typography variant="body2">{agent.description}</Typography>
                {/* Additional Agent-specific details */}
            </CardContent>
        </Card>
    );
}