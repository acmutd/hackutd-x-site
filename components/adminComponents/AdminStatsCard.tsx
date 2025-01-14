import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { HTMLProps } from 'react';

interface AdminStatsCardProps extends HTMLProps<HTMLDivElement> {
  title: string;
  value: number;
  icon: any;
}

export default function AdminStatsCard({ title, value, icon, className }: AdminStatsCardProps) {
  return (
    <div className={`border-2 p-5 flex flex-col rounded-xl text-secondary ${className ?? ''}`}>
      <div className="flex items-center gap-x-6">
        {icon}
        <div className="flex flex-col">
          <h1 className="text-xl">{title}</h1>
          <h1 className="text-3xl font-bold">{value}</h1>
        </div>
      </div>
    </div>
  );
}
