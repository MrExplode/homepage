import actix from '$lib/images/tech/actix.png'
import android from '$lib/images/tech/android.svg'
import androidstudio from '$lib/images/tech/androidstudio.svg'
import cef from '$lib/images/tech/cef.svg'
import cloudflare from '$lib/images/tech/cloudflare.svg'
import cpp from '$lib/images/tech/cpp.svg'
import csharp from '$lib/images/tech/csharp.svg'
import css from '$lib/images/tech/css.svg'
import dart from '$lib/images/tech/dart.svg'
import debian from '$lib/images/tech/debian.svg'
import docker from '$lib/images/tech/docker.svg'
import dotpeek from '$lib/images/tech/dotpeek.svg'
import flutter from '$lib/images/tech/flutter.svg'
import git from '$lib/images/tech/git.svg'
import go from '$lib/images/tech/go.svg'
import goland from '$lib/images/tech/goland.svg'
import gradle from '$lib/images/tech/gradle.svg'
import html from '$lib/images/tech/html5.svg'
import intellij from '$lib/images/tech/intellij.svg'
import java from '$lib/images/tech/java.svg'
import javascript from '$lib/images/tech/javascript.svg'
import junit from '$lib/images/tech/junit.svg'
import jwt from '$lib/images/tech/jwt.svg'
import kotlin from '$lib/images/tech/kotlin.svg'
import linux from '$lib/images/tech/linux.svg'
import lucia from '$lib/images/tech/lucia.svg'
import lwjgl from '$lib/images/tech/lwjgl.svg'
import mariadb from '$lib/images/tech/mariadb.svg'
import maven from '$lib/images/tech/maven.svg'
import minio from '$lib/images/tech/minio.png'
import mongodb from '$lib/images/tech/mongodb.svg'
import mysql from '$lib/images/tech/mysql.svg'
import node from '$lib/images/tech/node.svg'
import npm from '$lib/images/tech/npm.svg'
import opengl from '$lib/images/tech/opengl.svg'
import php from '$lib/images/tech/php.svg'
import pnpm from '$lib/images/tech/pnpm.svg'
import postgresql from '$lib/images/tech/postgresql.svg'
import prisma from '$lib/images/tech/prisma.svg'
import putty from '$lib/images/tech/putty.svg'
import python from '$lib/images/tech/python.svg'
import rabbitmq from '$lib/images/tech/rabbitmq.svg'
import redis from '$lib/images/tech/redis.svg'
import rider from '$lib/images/tech/rider.svg'
import rust from '$lib/images/tech/rust.svg'
import selenium from '$lib/images/tech/selenium.svg'
import sentry from '$lib/images/tech/sentry.svg'
import spring from '$lib/images/tech/spring.svg'
import svelte from '$lib/images/tech/svelte.svg'
import tailwindcss from '$lib/images/tech/tailwindcss.svg'
import tauri from '$lib/images/tech/tauri.svg'
import typescript from '$lib/images/tech/typescript.svg'
import ubuntu from '$lib/images/tech/ubuntu.svg'
import visualstudio from '$lib/images/tech/visualstudio.svg'
import vite from '$lib/images/tech/vite.svg'
import vscode from '$lib/images/tech/vscode.svg'
import vue from '$lib/images/tech/vue.svg'
import terminal from '$lib/images/tech/windows_terminal.svg'

export interface Tech {
    name: string
    icon: string
    class?: string
}

export const tech: Tech[] = [
    {
        name: 'Actix',
        icon: actix
    },
    {
        name: 'Android',
        icon: android
    },
    {
        name: 'Android Studio',
        icon: androidstudio
    },
    {
        name: 'Chromium Embedded Framework',
        icon: cef
    },
    {
        name: 'CloudFlare',
        icon: cloudflare
    },
    {
        name: 'C++',
        icon: cpp
    },
    {
        name: 'C#',
        icon: csharp
    },
    {
        name: 'CSS',
        icon: css
    },
    {
        name: 'Dart',
        icon: dart
    },
    {
        name: 'Debian',
        icon: debian
    },
    {
        name: 'Docker',
        icon: docker
    },
    {
        name: 'dotPeek',
        icon: dotpeek
    },
    {
        name: 'Flutter',
        icon: flutter
    },
    {
        name: 'Git',
        icon: git
    },
    {
        name: 'Go',
        icon: go
    },
    {
        name: 'GoLand',
        icon: goland
    },
    {
        name: 'Gradle',
        icon: gradle
    },
    {
        name: 'HTML',
        icon: html
    },
    {
        name: 'Intellij IDEA',
        icon: intellij
    },
    {
        name: 'Java',
        icon: java
    },
    {
        name: 'JavaScript',
        icon: javascript
    },
    {
        name: 'JUnit',
        icon: junit
    },
    {
        name: 'JWT',
        icon: jwt
    },
    {
        name: 'Kotiln',
        icon: kotlin
    },
    {
        name: 'Linux',
        icon: linux
    },
    {
        name: 'Lucia Auth',
        icon: lucia
    },
    {
        name: 'lwjgl',
        icon: lwjgl
    },
    {
        name: 'MariaDB',
        icon: mariadb
    },
    {
        name: 'Maven',
        icon: maven
    },
    {
        name: 'MinIO',
        icon: minio,
        class: 'h-14 w-auto'
    },
    {
        name: 'MongoDB',
        icon: mongodb,
        class: 'h-14 w-auto'
    },
    {
        name: 'MySQL',
        icon: mysql
    },
    {
        name: 'Node.js',
        icon: node
    },
    {
        name: 'npm',
        icon: npm
    },
    {
        name: 'OpenGL',
        icon: opengl
    },
    {
        name: 'PHP',
        icon: php
    },
    {
        name: 'pnpm',
        icon: pnpm
    },
    {
        name: 'PostgreSQL',
        icon: postgresql
    },
    {
        name: 'Prisma',
        icon: prisma
    },
    {
        name: 'PuTTY',
        icon: putty
    },
    {
        name: 'Python',
        icon: python
    },
    {
        name: 'RabbitMQ',
        icon: rabbitmq
    },
    {
        name: 'Redis',
        icon: redis
    },
    {
        name: 'Rider',
        icon: rider
    },
    {
        name: 'Rust',
        icon: rust
    },
    {
        name: 'Selenium',
        icon: selenium
    },
    {
        name: 'Sentry',
        icon: sentry
    },
    {
        name: 'Spring',
        icon: spring
    },
    {
        name: 'Svelte',
        icon: svelte
    },
    {
        name: 'Tailwind CSS',
        icon: tailwindcss
    },
    {
        name: 'Tauri',
        icon: tauri
    },
    {
        name: 'TypeScript',
        icon: typescript
    },
    {
        name: 'Ubuntu',
        icon: ubuntu
    },
    {
        name: 'Visual Studio',
        icon: visualstudio
    },
    {
        name: 'Vite',
        icon: vite
    },
    {
        name: 'Visual Studio Code',
        icon: vscode
    },
    {
        name: 'Vue.js',
        icon: vue
    },
    {
        name: 'Windows Terminal',
        icon: terminal
    }
]
