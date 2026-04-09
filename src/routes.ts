import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.jsx'),
  route('story', 'routes/story.jsx'),
  route('tool', 'routes/tool.jsx'),
  route('services', 'routes/services.jsx'),
  route('resources', 'routes/resources.jsx'),
  route('newsletter', 'routes/newsletter.jsx'),
] satisfies RouteConfig;
