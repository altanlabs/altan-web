import { Grid, Card, CardContent, Typography } from '@mui/material';


export default function Company({ company }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{company.name}</Typography>
        <Typography variant="body2">{company.description}</Typography>
        {/* Additional Agent-specific details */}
      </CardContent>
    </Card>
  );
}