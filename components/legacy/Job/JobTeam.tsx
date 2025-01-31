// import React from 'react';
// import { Avatar, AvatarGroup, Tooltip } from '@nextui-org/react';
// import { Member } from '@/types/job';

// type AvatarSize = 'sm' | 'md' | 'lg' | undefined;

// interface TeamDisplayProps {
//   team: Member[];
//   size: AvatarSize;
// }

// const JobTeam: React.FC<TeamDisplayProps> = ({ team, size }) => {
//   if (!team) return null;

//   return (
//     <AvatarGroup>
//       {team.map((member, index) => (
//         <Tooltip
//           key={index}
//           content={
//             <div className="px-1 py-2">
//               <div className="text-small font-bold">{member.name}</div>
//               <div className="text-tiny">{member.about}</div>
//             </div>
//           }
//         >
//           <Avatar size={size} src={member.avatar_url} />
//         </Tooltip>
//       ))}
//     </AvatarGroup>
//   );
// };

// export default JobTeam;
