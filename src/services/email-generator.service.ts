import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailGeneratorService {
  generateMagicLinkEmail({ token }): string {
    return `
    <html>
    <head></head>
    <body>
    <div>
    Your magic link is - https://codeiris.dev/auth/${token}
</div>
</body>
</html>`;
  }
}
