import { motion } from "framer-motion";

import {
  Row,
  Card as BaseCard,
  ImageCard,
  ArrowRow as BaseArrowRow,
  fadeIn,
  VideoCard,
} from "../analyses/analysisCommon";

// local wrapper that sets the border color for this page
const Card: React.FC<
  Omit<React.ComponentProps<typeof BaseCard>, "borderColorClass">
> = (props) => (
  <BaseCard borderColorClass="!border-[]" {...props} />
);

// local wrapper that sets the src img for the arrow row
const ArrowRow: React.FC<
  Omit<React.ComponentProps<typeof BaseArrowRow>, "src">
> = (props) => (
  <BaseArrowRow src="/images/projectImages/postureCoach/Arrow.png" {...props} />
);

/* ---------- Page ---------- */

export default function PostureCoachAnalysis() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-20 pb-16 text-white">
      {/* H1 */}
      <motion.h1
        className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 md:mb-10"
        {...fadeIn}
      >
        Posture Coach
      </motion.h1>

      {/* --- First 4 rows --- */}
      <div className="space-y-4 md:space-y-6">
        <Row colsClass="grid-cols-1 md:[grid-template-columns:auto_1fr]">
          <ImageCard
            src="/images/projectImages/postureCoach/cover image.png"
            // height="30rem"
            // width="40rem"
            className="
              w-full              
              md:min-w-[20rem] lg:min-w-[40rem]       
              aspect-[4/3]                  
            "
            caption="Training Data Examples"
            alt="Examples of posture classifications used to train Posture Coach"
          />
          <Card>
            <p>
              Posture Coach is a lightweight computer-vision project that fine-tunes a
              small YOLO classifier to recognize three webcam posture states—
              “looks good,” “sit up straight,” and “straighten head”—and provide
              fast, practical feedback for students and desk workers using typical
              laptop setups.
            </p>
          </Card>
        </Row>

        {/* 2 columns at md+; single column on mobile */}
        <Row colsClass="grid-cols-1 md:grid-cols-2">
          {/* Column B: stack two cards vertically (equal heights) */}
          <div className="h-full">
            <div className="grid grid-cols-1 auto-rows-fr gap-4 h-full min-h-0">
              <Card title="Context">
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Class Project, <em>Exploring Artificial Intelligence</em>
                  </li>
                  <li>October 2025 - November 2025</li>
                </ul>
                {/* Skills tags */}
                <div className="not-prose mt-3 flex flex-wrap gap-2 md:gap-3">
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Computer Vision
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Classification
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Python
                  </span>
                  <span className="bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm lg:text-base">
                    Git
                  </span>
                  {/* add more tags as needed */}
                </div>
              </Card>
              <Card title="Team">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ekam: Computer Vision Engineer, Evaluation & Analytics</li>
                  <li>Kaleb: Data Engineer, Evaluation & Analytics</li>
                </ul>
              </Card>
            </div>
          </div>
          {/* Column A: one tall card (regular or image) */}
          <div className="h-full">
            <ImageCard
              src="/images/projectImages/postureCoach/Test Data.png"
              caption="Test Data We Collected"
              alt="Test Data for Posture Coach"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
          </div>
        </Row>

        <Row cols={1}>
          <Card title="Links and Resources">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                We used a GitHub{" "}
                <a
                  href="https://github.com/ekam-n/IAT360-Computer-Vision-Project"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  repository
                </a>{" "}
                to manage our code and track changes.
              </li>
              <li>
                We used a pre-trained YOLO{" "}
                <a
                  href="https://docs.ultralytics.com/tasks/classify/"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  model
                </a>{" "}
                as the base for our classifier.
              </li>
              <li>
                We used an online{" "}
                <a
                  href="https://universe.roboflow.com/posturecorrection/posture_correction_v4/dataset/2"
                  className="underline underline-offset-2"
                  target="_blank"
                  rel="noreferrer"
                >
                  dataset
                </a>{" "}
                from Roboflow for training and validating our model.
              </li>
            </ul>
          </Card>
        </Row>

        <Row cols={1}>
          <Card title="Objective">
            <p>We wanted to build a lightweight computer-vision “posture coach” that uses a standard webcam to detect common slouching patterns in real time and gently nudge students and desk workers toward healthier, more upright sitting habits.</p>
          </Card>
        </Row>

      </div>

      {/* H2 */}
      <motion.h2
        className="mt-10 md:mt-14 mb-4 md:mb-6 text-2xl md:text-4xl font-medium tracking-tight"
        {...fadeIn}
      >
        Training Process
      </motion.h2>

      {/* One row after H2 */}
      <Row cols={2} className="mb-2">
        <ImageCard
          src="/images/projectImages/solarConquest/Battle Scenario - Long.png"
              caption="Battle Scenario"
              alt="A typical battle scenario for Solar Conquest"
              className="h-full"
              height="20rem" 
        />
        <Card title="Methodology">
          <p>
            To achieve this, we built a computer vision pipeline in Python using a YOLO-based classifier in a supervised learning setup, fine-tuning it on three labeled posture classes. We curated and split our dataset into train/validation/test sets, tracked experiments and checkpoints, and iterated on hyperparameters to improve accuracy, precision/recall, and F1. Finally, we validated the model on a held-out test set in different environments, using Git to coordinate development.
          </p>
        </Card>
      </Row>

      {/* Iteration block 1 */}
      <ArrowRow size={100} gap={180} />   
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Initial Training Iteration">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I started by fine-tuning a YOLO-based classifier in a supervised setup with mostly default hyperparameters, using 5 epochs with patience 5, batch 64, and 224×224 inputs to balance overfitting, VRAM use, and head–neck detail.</li>
                  <li>I evaluated this first model on the validation split and multiple test splits (original online test set, my own test images, and a combined split), tracking accuracy and per-class precision/recall/F1.</li>
                  <li>I noticed the model performed much better on my curated test data (~0.88 accuracy) than on the online test split (~0.73), and that some classes behaved inconsistently, which prompted a manual inspection of the dataset.</li>
                  <li>I discovered substantial label noise and “contamination” in the online test split (mislabelled frames from video clips), so I adapted by excluding that split from final evaluation and relying on cleaner, self-curated test data going forward.</li>
                </ul>
          </Card>
        </Row>
        <Row cols={2}>
          <ImageCard
            src="/images/projectImages/solarConquest/Annotated Initial Board.png"
                caption="Initial Game Board"
                alt="The first game board iteration for Solar Conquest, with one of the spawn locations indicated"
                className="h-full"
                height="20rem" 
          />
          <ImageCard
            src="/images/projectImages/solarConquest/Various Initial Game Cards.png"
                caption="Various Initial Game Cards"
                alt="Inital game card iterations for troops, a converter item, and a resource for Solar Conquest"
                className="h-full"
                height="20rem" 
          />
        </Row>
      </div>

      {/* Iteration block 2 */}
      <ArrowRow size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="First Hyperparameter Tuning Iteration">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I switched to an explicit AdamW optimizer so the model would respect my chosen learning rate instead of the auto-optimizer’s default, keeping all other hyperparameters the same.</li>
                  <li>We accepted slightly lower validation performance in exchange for higher test accuracy (~0.88) and stronger F1 on key classes, and treated this setup as my new baseline.</li>
                </ul>
          </Card>
        </Row>
        <Row colsClass="grid-cols-1 md:grid-cols-2">
          {/* Column B: stack two cards vertically (equal heights) */}
          {/* Column A: one tall card (regular or image) */}
          <div className="h-full">
            <ImageCard
              src="/images/projectImages/solarConquest/Improved Game Board.png"
              caption="Improved Game Board"
              alt="Improved Game Board for Solar Conquest"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
          </div>
          <div className="h-full">
            <div className="grid grid-cols-1 auto-rows-fr gap-4 h-full min-h-0">
              <ImageCard
              src="/images/projectImages/solarConquest/Improved Resource Cards.png"
              caption="Improved Resource Cards"
              alt="Improved Resource Cards for Solar Conquest"
              className="h-full"
              height="15rem"       // optional; Card/ImageCard already use h-full
            />
              <ImageCard
              src="/images/projectImages/solarConquest/Improved Troop Cards.png"
              caption="Improved Resource Cards"
              alt="Improved Resource Cards for Solar Conquest"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
            </div>
          </div>
        </Row>
      </div>

      {/* Final iteration */}
      <ArrowRow size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={1}>
          <Card title="Second Hyperparameter Tuning Iteration">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I enabled cosine learning-rate decay with a 1-epoch warmup on top of the AdamW baseline, based on research that this schedule helps models converge better in short training runs.</li>
                  <li>We achieved my best test performance with this setup (~93% accuracy with strong precision, recall, and F1 across all classes), and was satisfied enough with these results to stop further tuning.</li>
                </ul>
          </Card>
        </Row>
        <Row colsClass="grid-cols-1 md:grid-cols-2">
          {/* Column B: stack two cards vertically (equal heights) */}
          {/* Column A: one tall card (regular or image) */}
          <div className="h-full">
            <ImageCard
              src="/images/projectImages/solarConquest/Final Game Board.png"
              caption="Improved Game Board"
              alt="Improved Game Board for Solar Conquest"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
          </div>
          <div className="h-full">
            <div className="grid grid-cols-1 auto-rows-fr gap-4 h-full min-h-0">
              <ImageCard
              src="/images/projectImages/solarConquest/Planet With Converter.png"
              caption="Planet With a Converter"
              alt="A planet that has crafted a converter, in Solar Conquest"
              className="h-full"
              height="15rem"       // optional; Card/ImageCard already use h-full
            />
              <ImageCard
              src="/images/projectImages/solarConquest/Planet With Accelerator.png"
              caption="Planet With an Accelerator"
              alt="A planet that has crafted an accelerator, in Solar Conquest"
              className="h-full"
              height="100%"       // optional; Card/ImageCard already use h-full
            />
            </div>
          </div>
        </Row>
      </div>

      <ArrowRow size={100} gap={180} />
      <div className="space-y-4 md:space-y-6">
        <Row cols={2}>
          <Card title="Model Analysis">
            <ul className="list-disc pl-5 space-y-4">
                  <li>The final model reaches ~70% validation accuracy and ~93% test accuracy, indicating strong performance on our curated test set.</li>
                  <li>“Looks good” and “straighten head” are classified most reliably, while “sit up straight” is comparatively harder..</li>
                </ul>
          </Card>
          <Card title="Shortcomings and Biases">
            <ul className="list-disc pl-5 space-y-4">
                  <li>The ~20% gap between validation (~70%) and test (~93%) suggests possible overfitting or instability in how our splits were constructed.</li>
                  <li>Label noise in the original video-derived dataset (awkward transitions and mislabels) can distort learning and inflate or deflate class metrics</li>
                </ul>
          </Card>
        </Row>
        <Row cols={1}>
          <Card title="Takeaways">
            <ul className="list-disc pl-5 space-y-4">
                  <li>I learned how to take a small YOLO-based classifier from idea to a tuned, evaluated model, including dataset curation, train/val/test split design, and metric-driven iteration.</li>
                  <li>A challenge we faced was that we had to pivot from keypoint-based pose estimation to image classification after struggling to find a suitable dataset, and then deal with heavy label noise by manually cleaning mislabelled frames. From this, we learned that data quality is crucial, and investing time in cleaning and curating the dataset pays off in model performance.</li>
                </ul>
          </Card>
        </Row>
      </div>
    </main>
  );
}
