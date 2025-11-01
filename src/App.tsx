import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "./components/ui/chart";
import type { ChartConfig } from "./components/ui/chart";
import { Area, AreaChart, Bar, BarChart, Line, LineChart, Pie, PieChart, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

// Sample data for different chart types
const salesData = [
  { month: "Jan", revenue: 4000, expenses: 2400 },
  { month: "Feb", revenue: 3000, expenses: 1398 },
  { month: "Mar", revenue: 2000, expenses: 9800 },
  { month: "Apr", revenue: 2780, expenses: 3908 },
  { month: "May", revenue: 1890, expenses: 4800 },
  { month: "Jun", revenue: 2390, expenses: 3800 },
];

const userGrowthData = [
  { month: "Jan", users: 1000 },
  { month: "Feb", users: 1200 },
  { month: "Mar", users: 1100 },
  { month: "Apr", users: 1400 },
  { month: "May", users: 1600 },
  { month: "Jun", users: 1800 },
];

const categoryData = [
  { name: "Desktop", value: 400, fill: "#8884d8" },
  { name: "Mobile", value: 300, fill: "#82ca9d" },
  { name: "Tablet", value: 100, fill: "#ffc658" },
  { name: "Other", value: 50, fill: "#ff7300" },
];

const performanceData = [
  { quarter: "Q1", sales: 4000, marketing: 2400, support: 1600 },
  { quarter: "Q2", sales: 3000, marketing: 1398, support: 1800 },
  { quarter: "Q3", sales: 2000, marketing: 9800, support: 2200 },
  { quarter: "Q4", sales: 2780, marketing: 3908, support: 2500 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#2563eb",
  },
  expenses: {
    label: "Expenses", 
    color: "#dc2626",
  },
  users: {
    label: "Users",
    color: "#059669",
  },
  sales: {
    label: "Sales",
    color: "#8b5cf6",
  },
  marketing: {
    label: "Marketing",
    color: "#f59e0b",
  },
  support: {
    label: "Support",
    color: "#06b6d4",
  },
} satisfies ChartConfig;

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📊 Charts Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive charts built with Shadcn/UI and Recharts
          </p>
        </div>

        {/* Revenue & Expenses Bar Chart */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Revenue vs Expenses</CardTitle>
            <CardDescription>Monthly comparison of revenue and expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={salesData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar 
                  dataKey="revenue" 
                  fill="var(--color-revenue)" 
                  radius={[4, 4, 0, 0]}
                />
                <Bar 
                  dataKey="expenses" 
                  fill="var(--color-expenses)" 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Growth Line Chart */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>Monthly active user growth</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px]">
                <LineChart data={userGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="users" 
                    stroke="var(--color-users)" 
                    strokeWidth={3}
                    dot={{ fill: "var(--color-users)", r: 6, strokeWidth: 2, stroke: "white" }}
                    activeDot={{ r: 8, stroke: "var(--color-users)", strokeWidth: 2, fill: "white" }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Device Usage Pie Chart */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Device Usage</CardTitle>
              <CardDescription>Distribution of users by device type</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[250px]">
                <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                </PieChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Performance Area Chart */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Quarterly Performance</CardTitle>
            <CardDescription>Department performance across quarters</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[350px]">
              <AreaChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="quarter" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  stackId="1"
                  stroke="var(--color-sales)" 
                  fill="var(--color-sales)" 
                  fillOpacity={0.7}
                />
                <Area 
                  type="monotone" 
                  dataKey="marketing" 
                  stackId="1"
                  stroke="var(--color-marketing)" 
                  fill="var(--color-marketing)" 
                  fillOpacity={0.7}
                />
                <Area 
                  type="monotone" 
                  dataKey="support" 
                  stackId="1"
                  stroke="var(--color-support)" 
                  fill="var(--color-support)" 
                  fillOpacity={0.7}
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <span className="text-2xl">💰</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$45,231</div>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <span className="text-2xl">👥</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,800</div>
              <p className="text-xs text-muted-foreground">+12.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <span className="text-2xl">📈</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">3.24%</div>
              <p className="text-xs text-muted-foreground">+0.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <span className="text-2xl">🛒</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">573</div>
              <p className="text-xs text-muted-foreground">+8.2% from last month</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
