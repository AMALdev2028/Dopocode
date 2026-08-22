export type Problem = {
  id: string;
  title: string;
  body: string;
  stat: string;
  statLabel: string;
};

export const problems: Problem[] = [
{
  id: 'attention',
  title: 'No individual attention',
  body: 'A single teacher cannot give fifty children the minutes each of them needs to actually understand.',
  stat: '1:50',
  statLabel: 'teacher to students'
},
{
  id: 'rote',
  title: 'Rote instead of real learning',
  body: 'Children memorise for the exam, never grasp the idea, and the gaps quietly compound year after year.',
  stat: '13 yrs',
  statLabel: 'of compounding gaps'
},
{
  id: 'language',
  title: 'Language shuts them out',
  body: 'First-generation learners who think in a regional language spend the lesson translating instead of learning.',
  stat: '22+',
  statLabel: 'languages children think in'
}];


export type Step = {
  number: string;
  title: string;
  body: string;
  detail: string;
};

export const steps: Step[] = [
{
  number: '1',
  title: 'Placement without a test',
  body: 'A three-question warm-up game reads their real level. No score, no timer, no anxiety.',
  detail: 'Warm-up game'
},
{
  number: '2',
  title: 'Lessons that branch live',
  body: 'Every question is chosen by the last answer. Struggling, we step back. Confident, we push ahead.',
  detail: 'Adaptive branching'
},
{
  number: '3',
  title: 'Understanding, not recall',
  body: '“Explain why” follow-ups separate a memorised answer from a child who genuinely gets it.',
  detail: 'Explain why'
}];


export type Feature = {
  id: string;
  title: string;
  body: string;
  icon: 'route' | 'brain' | 'languages' | 'chart' | 'heart' | 'mic';
  tag: 'Core' | 'Bonus';
};

export const features: Feature[] = [
{
  id: 'adaptive',
  title: 'Adaptive flow',
  body: 'Real-time branching logic. A right answer raises the difficulty; a wrong one changes the explanation.',
  icon: 'route',
  tag: 'Core'
},
{
  id: 'understanding',
  title: 'Detects real understanding',
  body: '“Explain why” follow-ups catch memorisation before it turns into a gap.',
  icon: 'brain',
  tag: 'Core'
},
{
  id: 'multilingual',
  title: 'Multilingual by design',
  body: 'Built for regional-language learners. Children can switch mid-lesson without losing progress.',
  icon: 'languages',
  tag: 'Core'
},
{
  id: 'dashboard',
  title: 'Parent & teacher view',
  body: 'Exactly where your child is strong and where they need help, written in plain language.',
  icon: 'chart',
  tag: 'Bonus'
},
{
  id: 'distress',
  title: 'Gentle distress handling',
  body: 'If a child types something worrying, the tutor pauses the lesson and guides them to a trusted adult.',
  icon: 'heart',
  tag: 'Bonus'
},
{
  id: 'voice',
  title: 'Voice in and out',
  body: 'Pre-readers can speak their answer and hear the lesson read back to them.',
  icon: 'mic',
  tag: 'Bonus'
}];


export type Journey = {
  id: string;
  student: string;
  summary: string;
  body: string;
  path: string[];
  accent: 'coral' | 'primary';
};

export const journeys: Journey[] = [
{
  id: 'struggling',
  student: 'Aarav, Class 6 — shaky on basics',
  summary: 'The tutor detects hesitation and quietly goes back three years.',
  body: 'It rebuilds fractions with visual pizza slices, offers a hint at every step, and praises the attempt rather than the speed. The lesson reads like a conversation, never a test.',
  path: ['Class 6 start', 'Back to Class 4 fractions', 'Visual aids', 'Hints on tap', 'Effort praised'],
  accent: 'coral'
},
{
  id: 'confident',
  student: 'Meera, Class 6 — already ahead',
  summary: 'The tutor skips the drills she has clearly mastered.',
  body: 'Within two questions she is on an algebra word problem, then a Boss Challenge that asks her to derive the rule herself. She leaves curious instead of bored.',
  path: ['Class 6 start', 'Basics skipped', 'Algebra challenge', 'Boss level', 'Derives the rule'],
  accent: 'primary'
}];


export const navLinks = [
{ href: '#problem', label: 'The problem' },
{ href: '#how', label: 'How it works' },
{ href: '#features', label: 'Features' },
{ href: '#journeys', label: 'Journeys' }];


export const footerColumns = [
{
  heading: 'Product',
  links: ['Features', 'Pricing', 'Demo', 'Schools']
},
{
  heading: 'Company',
  links: ['About', 'Blog', 'Careers']
},
{
  heading: 'Support',
  links: ['Help centre', 'Contact', 'Privacy policy']
}];