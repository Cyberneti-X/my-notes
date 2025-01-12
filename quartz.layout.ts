import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Google Classroom": "https://classroom.google.com/u/1",
      "Youtube": "https://www.youtube.com/@Cyberneti-X",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta(), Component.TagList()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.DesktopOnly(
      Component.RecentNotes({
        title: "Recent Waffles:",
        limit: 3,
        filter: (f) =>
          f.slug!.startsWith("Web/Waffles/") && f.slug! !== "index" && !f.frontmatter?.noindex,
        sort: (f1, f2) =>
          (f2.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER) -
          (f1.dates?.created.getTime() ?? Number.MAX_SAFE_INTEGER),
        linkToMore: "./tags/Waffle" as SimpleSlug,
      }),
    ),
  ],
  right: [Component.Graph(), Component.Backlinks()],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  right: [],
}
