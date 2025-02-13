import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('jokes').del();

  // Inserts seed entries
  await knex('jokes').insert([
    {
      id: crypto.randomUUID(),
      text: 'How did I know my girlfriend thought I was invading her privacy? She wrote about it in her diary.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: "Why did the electric car feel discriminated against? Because the rules weren't current.",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: "I'm such a good navigator, a self-driving car once asked me for directions.",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: 'Why do melons have weddings? They cantelope.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: 'What did the bison say to his son when he left the ranch? Bi-son.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: "Watch what you say around the egg whites. They can't take a yolk.",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: "I'm so good at fixing things, my motto is, 'If it is broke, I'll still fix it.'",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: 'Where did the pumpkins have their meeting? In the gourdroom.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: "What's the best way to save your dad jokes? In a dadda-base.",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: 'I got a new pen that can write under water. It can write other words too.',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: "My boss said 'dress for the job you want, not for the job you have.' So I went in as Batman.",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
