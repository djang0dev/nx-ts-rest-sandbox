import { Module } from '@nestjs/common';
import { PostController } from '../post/post.controller';
import { PostService } from '../post/post.service';
import { PostModule } from '../post/post.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PostModule,
  ],
})
export class AppModule {}
