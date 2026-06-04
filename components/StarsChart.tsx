"use client";

import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ContributionDay } from "@/lib/github";

export function StarsChart({ contributions }: { contributions: ContributionDay[] }) {
  // Format date to short format like "Jun 4"
  const data = contributions.map(c => {
    const d = new Date(c.date);
    return {
      date: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      commits: c.contributionCount,
      fullDate: c.date,
    };
  });

  return (
    <div className="w-full h-32 mt-6">
      <h4 className="text-xs text-slate-400 mb-3 font-medium uppercase tracking-wider text-center">Daily Commits (Last 30 Days)</h4>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <defs>
            <linearGradient id="colorCommits" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(10, 15, 30, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "8px",
              color: "#f0f4ff",
              backdropFilter: "blur(8px)",
              fontSize: "12px",
            }}
            itemStyle={{ color: "#f0f4ff", fontWeight: 600 }}
            labelStyle={{ color: "#94a3b8", marginBottom: "4px" }}
            labelFormatter={(label) => label}
            formatter={(value: number) => [`${value} Commits`, "Activity"]}
          />
          <XAxis 
            dataKey="date" 
            hide 
          />
          <Area
            type="monotone"
            dataKey="commits"
            name="Commits"
            stroke="#8b5cf6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorCommits)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
