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
    category?: string
    class?: string
}

export const tech: Tech[] = [
    {
        name: 'Actix',
        icon: actix,
        category: 'library'
    },
    {
        name: 'Android',
        icon: android
    },
    {
        name: 'Android Studio',
        icon: androidstudio,
        category: 'IDE'
    },
    {
        name: 'Chromium Embedded Framework',
        icon: cef,
        category: 'framework'
    },
    {
        name: 'CloudFlare',
        icon: cloudflare
    },
    {
        name: 'C++',
        icon: cpp,
        category: 'language'
    },
    {
        name: 'C#',
        icon: csharp,
        category: 'language'
    },
    {
        name: 'CSS',
        icon: css
    },
    {
        name: 'Dart',
        icon: dart,
        category: 'language'
    },
    {
        name: 'Debian',
        icon: debian,
        category: 'os'
    },
    {
        name: 'Docker',
        icon: docker
    },
    {
        name: 'dotPeek',
        icon: dotpeek,
        category: 'tool'
    },
    {
        name: 'Flutter',
        icon: flutter,
        category: 'framework'
    },
    {
        name: 'Git',
        icon: git,
        category: 'version control'
    },
    {
        name: 'Go',
        icon: go,
        category: 'language'
    },
    {
        name: 'GoLand',
        icon: goland,
        category: 'IDE'
    },
    {
        name: 'Gradle',
        icon: gradle,
        category: 'build system'
    },
    {
        name: 'HTML',
        icon: html
    },
    {
        name: 'Intellij IDEA',
        icon: intellij,
        category: 'IDE'
    },
    {
        name: 'Java',
        icon: java,
        category: 'language'
    },
    {
        name: 'JavaScript',
        icon: javascript,
        category: 'language'
    },
    {
        name: 'JUnit',
        icon: junit,
        category: 'framework'
    },
    {
        name: 'JWT',
        icon: jwt,
        category: 'technology'
    },
    {
        name: 'Kotiln',
        icon: kotlin,
        category: 'language'
    },
    {
        name: 'Linux',
        icon: linux,
        category: 'os'
    },
    {
        name: 'Lucia Auth',
        icon: lucia,
        category: 'library'
    },
    {
        name: 'lwjgl',
        icon: lwjgl,
        category: 'framework'
    },
    {
        name: 'MariaDB',
        icon: mariadb,
        category: 'database'
    },
    {
        name: 'Maven',
        icon: maven,
        category: 'build system'
    },
    {
        name: 'MinIO',
        icon: minio,
        class: 'h-14 w-auto',
        category: 'S3 storage'
    },
    {
        name: 'MongoDB',
        icon: mongodb,
        class: 'h-14 w-auto',
        category: 'database'
    },
    {
        name: 'MySQL',
        icon: mysql,
        category: 'database'
    },
    {
        name: 'Node.js',
        icon: node
    },
    {
        name: 'npm',
        icon: npm,
        category: 'package manager'
    },
    {
        name: 'OpenGL',
        icon: opengl,
        category: 'framework'
    },
    {
        name: 'PHP',
        icon: php,
        category: 'language'
    },
    {
        name: 'pnpm',
        icon: pnpm,
        category: 'package manager'
    },
    {
        name: 'PostgreSQL',
        icon: postgresql,
        category: 'database'
    },
    {
        name: 'Prisma',
        icon: prisma,
        category: 'framework'
    },
    {
        name: 'PuTTY',
        icon: putty,
        category: 'tool'
    },
    {
        name: 'Python',
        icon: python,
        category: 'language'
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
        icon: rider,
        category: 'IDE'
    },
    {
        name: 'Rust',
        icon: rust,
        category: 'language'
    },
    {
        name: 'Selenium',
        icon: selenium,
        category: 'framework'
    },
    {
        name: 'Sentry',
        icon: sentry,
        category: 'analytics'
    },
    {
        name: 'Spring',
        icon: spring,
        category: 'framework'
    },
    {
        name: 'Svelte',
        icon: svelte,
        category: 'framework'
    },
    {
        name: 'Tailwind CSS',
        icon: tailwindcss,
        category: 'library'
    },
    {
        name: 'Tauri',
        icon: tauri,
        category: 'framework'
    },
    {
        name: 'TypeScript',
        icon: typescript,
        category: 'language'
    },
    {
        name: 'Ubuntu',
        icon: ubuntu,
        category: 'os'
    },
    {
        name: 'Visual Studio',
        icon: visualstudio,
        category: 'IDE'
    },
    {
        name: 'Vite',
        icon: vite,
        category: 'build system'
    },
    {
        name: 'Visual Studio Code',
        icon: vscode,
        category: 'IDE'
    },
    {
        name: 'Vue.js',
        icon: vue,
        category: 'framework'
    },
    {
        name: 'Windows Terminal',
        icon: terminal,
        category: 'tool'
    }
]
