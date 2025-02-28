import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

// Match the interface to the project structure
interface ProjectPreviewProps {
  title?: string
  description?: string
  technologies?: string[]
  icon?: React.ElementType
  github?: string
  category?: string
  isVisible: boolean
  onClose: () => void
}

export function ProjectPreview({
  title,
  description,
  technologies = [],
  icon: Icon,
  github,
  isVisible,
  onClose
}: ProjectPreviewProps) {
  if (!isVisible || !title) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        className="bg-card max-w-lg w-full p-6 rounded-lg pixel-corners"
        onClick={(e) => e.stopPropagation()}
        layoutId={`project-${title}`}
      >
        <div className="flex items-center gap-2 mb-4">
          {Icon && <Icon className="w-6 h-6 text-primary" />}
          <h3 className="font-press-start text-xl">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="pixel-corners">
              {tech}
            </Badge>
          ))}
        </div>
        
        {github && (
          <Button
            variant="outline"
            className="w-full pixel-corners"
            onClick={() => window.open(github, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View on GitHub
          </Button>
        )}
      </motion.div>
    </motion.div>
  )
}
