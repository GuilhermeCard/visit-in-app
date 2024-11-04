export interface TabItem {
  iconName: string;
  name: string;
  component: React.ComponentType<any>;
}

export interface BottomTabNavigatorProps {
  routes: TabItem[];
  initialRouteName: string;
}