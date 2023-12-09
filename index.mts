export async function handler() {
  const args = [
   `--url`,
            `--migrations-dir`,
            '--no-dump-schema',
            'up',
  ]

  return args
}
